import requests
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
import joblib

class APIDataLoader:
    def __init__(self, api_url, headers=None):
        self.api_url = api_url
        self.headers = headers or {}
        
    def fetch_data(self, params=None):
        """Fetch data from API"""
        try:
            response = requests.get(
                self.api_url,
                headers=self.headers,
                params=params or {}
            )
            response.raise_for_status()
            return pd.DataFrame(response.json())
        except Exception as e:
            print(f"Error fetching data: {e}")
            return None

class ModelTrainer:
    def __init__(self, data_loader):
        self.data_loader = data_loader
        self.scaler = StandardScaler()
        self.model = RandomForestClassifier(n_estimators=100)
        
    def train(self, target_column, params=None):
        """Train the model"""
        # Fetch data from API
        df = self.data_loader.fetch_data(params)
        if df is None:
            return False
            
        # Basic preprocessing
        df = df.dropna()
        
        # Encode categorical variables
        categorical_cols = df.select_dtypes(include=['object']).columns
        for col in categorical_cols:
            df[col] = pd.Categorical(df[col]).codes
            
        # Split features and target
        X = df.drop(columns=[target_column])
        y = df[target_column]
        
        # Split into train/test sets
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train model
        self.model.fit(X_train_scaled, y_train)
        
        # Evaluate
        score = self.model.score(X_test_scaled, y_test)
        print(f"Model accuracy: {score:.2f}")
        
        return X_test_scaled, y_test
    
    def save_model(self, path='model.pkl'):
        """Save trained model"""
        joblib.dump({
            'model': self.model,
            'scaler': self.scaler
        }, path)
        print(f"Model saved to {path}")

# Usage example
if __name__ == "__main__":
    loader = APIDataLoader(
        "https://test.tunisiagotravel.com/utilisateur/allhotels"
        
    )
    df = loader.fetch_data()
    print(df.head())
    print(df.dtypes)
    trainer = ModelTrainer(loader)
    trainer.train(target_column='target')
    trainer.save_model()
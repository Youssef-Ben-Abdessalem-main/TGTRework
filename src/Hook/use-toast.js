import { reactive, readonly } from "vue";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

const memoryState = reactive({
  toasts: [],
});

function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    removeToast(toastId);
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

function addToast(props) {
  const id = genId();

  const newToast = {
    ...props,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismissToast(id);
    },
  };

  memoryState.toasts.unshift(newToast);

  if (memoryState.toasts.length > TOAST_LIMIT) {
    memoryState.toasts.splice(TOAST_LIMIT);
  }

  return {
    id,
    dismiss: () => dismissToast(id),
    update: (newProps) => updateToast(id, newProps),
  };
}

function updateToast(toastId, props) {
  const toast = memoryState.toasts.find((t) => t.id === toastId);
  if (toast) Object.assign(toast, props);
}

function dismissToast(toastId) {
  if (toastId) {
    addToRemoveQueue(toastId);
  } else {
    memoryState.toasts.forEach((t) => addToRemoveQueue(t.id));
  }

  memoryState.toasts.forEach((t) => {
    if (!toastId || t.id === toastId) t.open = false;
  });
}

function removeToast(toastId) {
  if (!toastId) {
    memoryState.toasts.length = 0;
    return;
  }
  const index = memoryState.toasts.findIndex((t) => t.id === toastId);
  if (index > -1) memoryState.toasts.splice(index, 1);
}

export function useToast() {
  return {
    toasts: readonly(memoryState.toasts),
    toast: addToast,
    dismiss: dismissToast,
    update: updateToast,
  };
}

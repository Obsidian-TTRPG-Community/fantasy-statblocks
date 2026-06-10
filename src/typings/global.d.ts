
declare type DndEventInfo = import("svelte-dnd-action").DndEventInfo;
declare interface GenericDndEvent<T extends Record<string, any>> {
    items: T[];
    info: DndEventInfo;
}
declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onconsider?: (
            event: CustomEvent<GenericDndEvent<any>> & { target: EventTarget & T }
        ) => void;
        onfinalize?: (
            event: CustomEvent<GenericDndEvent<any>> & { target: EventTarget & T }
        ) => void;
    }
}

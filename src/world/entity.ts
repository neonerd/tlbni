export interface IAwake {
    awake (): void
}

export interface IComponent extends IAwake {
}



class Entity {
    components: IComponent[] = []
}
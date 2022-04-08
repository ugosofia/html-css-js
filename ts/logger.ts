enum LEVEL{
    INFO,
    WARN,
    ERROR
}


class Logger {
    name: String
    level: LEVEL

    constructor(name: string, level:LEVEL) {
        this.level = level
        this.name = name
    }

    getName(): String {
        return this.name
    }

    getLevel(): LEVEL {
        return this.level
    }

    setName(name: string): void {
        this.name = name
    }

    setLevel(level: LEVEL): void {
        this.level = level
    }
}
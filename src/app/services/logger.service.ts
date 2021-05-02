import { Injectable } from '@angular/core';

export enum LogLevel {
    Verbose = 0,
    Info = 1,
    Warn = 2,
    Error = 3,
    Critical = 4
}

@Injectable({
    providedIn: 'root'
})
export class Logger {

    private logLevel = LogLevel.Info;
    private messages: any[] = [];

    constructor() {
    }

    setLogLevel(logLevel: LogLevel) {
        this.logLevel = logLevel;
    }

    verbose(message: string, ...args: any[]) {
        this.log(LogLevel.Verbose, message, ...args);
    }

    info(message: string, ...args: any[]) {
        this.log(LogLevel.Info, message, ...args);
    }

    warn(message: string, ...args: any[]) {
        this.log(LogLevel.Warn, message, ...args);
    }

    error(message: string, ...args: any[]) {
        this.log(LogLevel.Error, message, ...args);
    }

    critical(message: string, ...args: any[]) {
        this.log(LogLevel.Critical, message, ...args);
    }

    shouldLog(logLevel: LogLevel): boolean {
        return this.logLevel <= logLevel;
    }

    lastEntries() {
        return this.messages;
    }

    catchErrorLogs() {
        const array = [];
        const data = this.lastEntries();
        const catchers = [/Exception/g, /CRITICAL/g, /FATAL/g];
        // ACA LOS TENEMOS LISTOS PARA MAPEAR
        const result = Object.values(data);
        // const onJson = JSON.stringify(result);
        for (const key of result) {
            // array.push(key.message);
            const val = JSON.stringify(key);
            if (val.search(catchers[0]) !== -1 || val.search(catchers[1]) !== -1 || val.search(catchers[2]) !== -1) {
                array.push(key);
            }
        }
        return array;
    }

    private log(logLevel: LogLevel, message: string, ...args: any[]) {

        if (this.messages.length > 29) {
            this.messages.shift();
        }

        this.messages.push({ timestamp: new Date(), level: logLevel, message, args });

        if (!this.shouldLog(logLevel)) {
            return;
        }

        switch (logLevel) {
            case LogLevel.Verbose:
                console.log(`[EXOS Core] ${message}`, ...args);
                break;
            case LogLevel.Info:
                // tslint:disable-next-line:no-console
                console.info(`[EXOS Core] ${message}`, ...args);
                break;
            case LogLevel.Warn:
                console.warn(`[EXOS Core] ${message}`, ...args);
                break;
            case LogLevel.Error:
                console.error(`[EXOS Core] ${message}`, ...args);
                break;
            case LogLevel.Critical:
                console.error(`[EXOS Core] [CRITICAL] ${message}`, ...args);
                break;
            default:
                break;
        }
    }
}

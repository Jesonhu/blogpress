declare const _default: {
    "appenders": {
        "out": {
            "type": string;
        };
        "errorLogger": {
            "type": string;
            "filename": string;
            "encoding": string;
            "maxLogSize": number;
            "numBackups": number;
            "pattern": string;
            "alwaysIncludePattern": boolean;
            "path": string;
        };
        "resLogger": {
            "type": string;
            "filename": string;
            "encoding": string;
            "maxLogSize": number;
            "numBackups": number;
            "pattern": string;
            "alwaysIncludePattern": boolean;
            "path": string;
        };
    };
    "categories": {
        "default": {
            "appenders": string[];
            "level": string;
        };
        "errorLogger": {
            "appenders": string[];
            "level": string;
        };
        "resLogger": {
            "appenders": string[];
            "level": string;
        };
    };
};
export default _default;

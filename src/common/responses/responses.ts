export class GeneralResponse {
    private status: boolean;
    private message: string;
    private data: any;
    private meta: any;
    private error: any;

    constructor(status: boolean, message: string, data: any, meta: any, error: any) {
        this.status = status,
        this.message = message,
        this.data = data, 
        this.meta = meta,
        this.error = error
    }
}

export class SuccessResponse extends GeneralResponse {
    constructor(message: string, data: any, meta: any) {
        super(true, message, data, meta, null)
    }
}

export class ErrorResponse extends GeneralResponse {
    constructor(message: string, error: any) {
        super(false, message, null, null, error)
    }
}
export interface EmailRequest {
    destinatarios: string[];
    assunto: string;
    corpo: string;
    anexos?: string[];
}

export interface EmailResponse {
    sucesso: boolean;
    mensagem: string;
    dataEnvio: string;

}

export interface EmailHealtResponse {
    status: string;
    timestamp: string;
    environment: string;
}

export interface EmailValidationResponse {
    valido: boolean;
    mensagem: string;
}
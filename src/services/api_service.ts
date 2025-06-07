import { environment } from "../environments/environment";

type RequestResponse = {
  status: string;
  code: number;
  data: string;
  timestamp: string;
  processing_time: number;
  metadata: {
    api_version: string;
    path: string;
    method: string;
  };
};

interface LoginRequest {
  wallet_address: string;
  signature: string;
  nonce: string;
  public_key_hex: string;
  wallet_type_name?: string | null;  // optional and can be null
}

class ApiService {
  private apiEndpoint: string;

  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint;
  }

  private async handleResponse(response: Response): Promise<RequestResponse> {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }
    return response.json();
  }

  async getNonce(wallet_address: string): Promise<string | null> {
    const params = new URLSearchParams({ wallet_address });
    const url = `${this.apiEndpoint}/nonce?${params.toString()}`;
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
    });
    const response_json = await this.handleResponse(response);
    return response_json.data ?? null;
  }

  async login(data: LoginRequest): Promise<boolean> {
    const url = `${this.apiEndpoint}/login`;
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const response_json = await this.handleResponse(response);
    console.log(response_json)
    return true
  }
}

export default new ApiService(environment.apiEndpoint);

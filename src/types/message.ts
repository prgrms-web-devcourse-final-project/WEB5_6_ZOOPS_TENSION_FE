export interface OpenSidePanelMessage {
  action: 'openSidePanel';
}

export interface MessageResponse {
  success: boolean;
  error?: string;
}

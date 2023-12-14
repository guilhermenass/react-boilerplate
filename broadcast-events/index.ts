export function dispatchEvent(): void {
  const channel = new BroadcastChannel('channel-name');
  channel.postMessage({ value: true }); // pode ser qualquer valor aqui
  channel.close();
}

export function listenEvent(): void {
  const channel = new BroadcastChannel('channel-name');

  channel.addEventListener('message', () => {
    // aqui pode chamar um useState para atualizar um valor
  });

  channel.onmessage = () => {
    return channel.close();
  };
}

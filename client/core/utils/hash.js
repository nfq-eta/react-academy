export const createHash = (size = 15) => {
  let hash = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < size - 1; i++) {
    hash += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return hash;
};

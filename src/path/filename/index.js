import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default function filename(meta) {
  const path = meta.url.indexOf('///') !== -1 ? fileURLToPath(meta.url) : meta.url;

  const dir = dirname(path);

  return path.replace(dir, '').slice(1);
}

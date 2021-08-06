import axios from 'axios';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const API_URL = 'https://kitsu.io/api/edge/anime';
export const PAGE_LOGO =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60cec3be-2d4c-42c0-a0a2-a5e3d4046113/d840kov-15a917ce-53b0-4ece-b672-df30b4623df9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwY2VjM2JlLTJkNGMtNDJjMC1hMGEyLWE1ZTNkNDA0NjExM1wvZDg0MGtvdi0xNWE5MTdjZS01M2IwLTRlY2UtYjY3Mi1kZjMwYjQ2MjNkZjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3cLtBkGNjCY7vCjRZxX2dKyiB59TqAVH03QbIJ9Wkik';

import { NextApiRequest, NextApiResponse } from 'next'
import posts from '../../../data/posts.json'

export default(req: NextApiRequest, res: NextApiResponse) => {
    const filtered = posts.posts.filter((p) => p.id === req.query.id)
  
    return filtered.length > 0
      ? res.status(200).json(filtered[0])
      : res.status(404).json({ message: `Пост с ${req.query.id} не найден.` })
  }
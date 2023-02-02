import { Injectable } from '@nestjs/common';
import { pgClient } from '../db/client';

export type Post = {
  post_id: string;
  user_id: string;
  title: string;
  content: string;
};

@Injectable()
export class PostsService {
  async createPost(userId, post: { title: string; content: string }) {
    const client = await pgClient();
    await client.query(
      `insert into public.post (user_id, title, content) values ($1, $2, $3)`,
      [userId, post.title, post.content],
    );
  }

  async deletePost(userId: string, postId: string) {
    const client = await pgClient();
    const postQuery = await client.query<{ user_id: string }>(
      `SELECT user_id
      FROM public.post
      WHERE post_id = $1`,
      [postId],
    );
    const post = postQuery?.rows?.[0];
    if (!post) {
      throw new Error('Post not found');
    }
    if (post.user_id !== userId) {
      throw new Error('User is not owner of post');
    }
    await client.query(
      `delete FROM public.post
      WHERE post_id = $1`,
      [postId],
    );
  }

  async getPostsByUser(userId: string): Promise<Post[]> {
    const client = await pgClient();
    const postQuery = await client.query<Post>(
      `SELECT *
      FROM public.post
      WHERE user_id = $1`,
      [userId],
    );
    return postQuery.rows;
  }
}

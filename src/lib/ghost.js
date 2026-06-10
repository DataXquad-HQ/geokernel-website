import GhostContentAPI from '@tryghost/content-api';

const ghost = new GhostContentAPI({
  url: 'https://ghost.dataxquad.com',
  key: '5d6521ed51fc01402e7829a204',
  version: 'v5.0',
});

export async function getPosts({ limit = 'all', tag } = {}) {
  try {
    const filter = tag ? `tag:${tag}` : undefined;
    const posts = await ghost.posts.browse({
      limit,
      filter,
      include: 'tags,authors',
      order: 'published_at DESC',
    });
    return posts.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || post.custom_excerpt || '',
      content: post.html || '',
      coverImage: post.feature_image || null,
      publishedAt: post.published_at,
      tags: (post.tags || []).map((t) => t.name),
      authors: (post.authors || []).map((a) => a.name),
      readingTime: post.reading_time || 0,
    }));
  } catch (err) {
    console.error('[Ghost] getPosts error:', err.message);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const post = await ghost.posts.read(
      { slug },
      { include: 'tags,authors' }
    );
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || post.custom_excerpt || '',
      content: post.html || '',
      coverImage: post.feature_image || null,
      publishedAt: post.published_at,
      tags: (post.tags || []).map((t) => t.name),
      authors: (post.authors || []).map((a) => a.name),
      readingTime: post.reading_time || 0,
    };
  } catch (err) {
    console.error('[Ghost] getPost error:', err.message);
    return null;
  }
}

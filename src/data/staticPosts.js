/**
 * Manually maintained independent HTML posts.
 *
 * Keep each post self-contained under public/posts/<slug>/.
 * `href` and `thumbnail` intentionally start with ./posts/ so the links work
 * in Vite dev mode and remain relative after a production build.
 */
export const staticPosts = [
  {
    slug: 'github',
    title: 'Git Merge, Push, Cherry-pick ও Conflict Fix — VPS সহ পূর্ণাঙ্গ বাংলা Tutorial',
    description:
      'Git setup, pull, merge, cherry-pick, selected commit push, reset, reflog এবং VPS merge conflict fix নিয়ে practical বাংলা guide।',
    thumbnail: './posts/github/thumbnail.svg',
    href: './posts/github/index.html',
    category: 'Git Tutorial',
  },
]

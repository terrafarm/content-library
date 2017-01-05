# What

This repo contains the source code and content for Terrafarm's content library website [terra.farm].

Content is authored in plain-text-friendly markup formats like [Markdown] and
served using a dynamic stack (described below). New code can be deployed and
content added or updated via `git push`.

## Stack

- [React]: Declarative, component-oriented view layer.
- [Relay]: Declarative data-management.
- [GraphQL]: Hierarchical data querying language, type system and server.
- [Git]: Main content storage.
- [Redis]: Indexing and caching.
- [memcached]: Caching.

Supporting tools and technologies:

- [Markdown]: Preferred content markup.
- [Vim]: Content editing.
- [Marked 2]: Local content previewing.

## Acknowledgements

This was forked from [wincent/masochist](https://github.com/wincent/masochist)

[Git]: https://git-scm.com/
[GraphQL]: http://graphql.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Marked 2]: http://marked2app.com/
[memcached]: http://memcached.org/
[React]: http://facebook.github.io/react/
[Redis]: http://redis.io/
[Relay]: http://facebook.github.io/relay/
[Vim]: https://github.com/vim/vim
[wincent.com]: https://wincent.com

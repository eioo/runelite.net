import parseBlog from './parse-blog'

const blog = require
  .context('!null-loader!./_posts', false, /.md$/)
  .keys()
  .sort()
  .reverse()
  .reduce((memo, fileName) => {
    // Parse blog metadata
    const parsed = parseBlog(fileName)

    const resolver = () => {
      const mapper = md => {
        return {
          id: parsed.id,
          date: parsed.date,
          body: md.__content,
          ...md
        }
      }

      return import(`!markdown-with-front-matter-loader!./_posts/${
        parsed.file
      }.md`).then(mapper)
    }

    return memo.set(parsed.id.toLowerCase(), resolver)
  }, new Map())

export const getBlog = id => {
  const post = blog.get(id.toLowerCase())

  if (post) {
    return post()
  }

  return Promise.resolve({})
}

export const latest = async () => {
  const values = blog.values()

  for (let value of values) {
    const post = await value()

    if (post.hasOwnProperty('skip') && post.skip) {
      continue
    }

    return post
  }

  return {}
}

export default blog

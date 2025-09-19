import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Quiz from '../../components/Quiz'

export default function LessonPage({ source }) {
  return (
    <div className="p-8 prose max-w-none">
      <MDXRemote {...source} components={{ Quiz }}/>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'lessons'))
  const paths = files.map(f => ({ params: { slug: f.replace(/\.mdx$/, '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'lessons', params.slug + '.mdx')
  const sourceText = fs.readFileSync(filePath, 'utf-8')
  const mdxSource = await serialize(sourceText, { parseFrontmatter: true })
  return { props: { source: mdxSource } }
}

import Article from './Article';

const posts = [
    {
        id: 1,
        title: "Components 101",
        date: "December 15, 2020",
        preview: "Setting up the building blocks of your site",
        minutes: 5,
      },
      {
        id: 2,
        title: "React Data Flow",
        date: "December 11, 2020",
        preview: "Passing props is never passé",
        minutes: 15,
      },
      {
        id: 3,
        title: "Function vs Class Components",
        preview: "React, meet OOJS.",
        minutes: 47,
      }
]

function ArticleList() {

    const articles = posts.map((post) => {
    return (
            <Article key={post.id} title={post.title} preview={post.preview} date={post.date}/>
    )
})

    return (
        <main>
            {articles}
        </main>
    )}

export default ArticleList;
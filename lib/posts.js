import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'pages/posts')

export async function getSortedPostsData() {
    // Get file names under /posts
    // const fileNames = fs.readdirSync(postsDirectory)
    // const allPostsData = fileNames.map(fileName => {
    //     // Remove ".md" from file name to get id
    //     const id = fileName.replace(/\.md$/, '')

    //     // Read markdown file as string
    //     const fullPath = path.join(postsDirectory, fileName)
    //     const fileContents = fs.readFileSync(fullPath, 'utf8')

    //     // Use gray-matter to parse the post metadata section
    //     const matterResult = matter(fileContents)

    //     // Combine the data with the id
    //     return {
    //         id,
    //         ...matterResult.data
    //     }
    // })
    // // Sort posts by date
    // return allPostsData.sort(({ date: a }, { date: b }) => {
    //     if (a < b) {
    //         return 1
    //     } else if (a > b) {
    //         return -1
    //     } else {
    //         return 0
    //     }
    // })

    try {
        const url = `http://newsapi.org/v2/top-headlines?country=${'in'}&apiKey=${'45512bf52fe44ac888e6bfb092b69da0'}&pageSize=5`
        const response = await fetch(url);
        // console.log(response, 'resposne')
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
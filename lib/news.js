import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import countries from './countries.json';

export function getAllNewsCountries() {
    const fileNames = countries;

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                country: fileName,
            }
        }
    })
}

export async function getNewsData(country) {
    const fullPath = path.join(country, `${country}.js`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    try {
        const url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${'45512bf52fe44ac888e6bfb092b69da0'}&pageSize=5`
        const response = await fetch(url);
        // console.log(response, 'resposne')
        return response.json();
    } catch (error) {
        console.error(error);
    }
    // Combine the data with the country
    // return {
    //     country,
    //     ...matterResult.data
    // }
}
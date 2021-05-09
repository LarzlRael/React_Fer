import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './components/GifGrid';

const GitExportApp = ({ defaultCategories = [] }) => {

    //const categories = ['Dragon Ball', 'naruto', 'my hero academia']
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // add a new category by spreed operator
    //     // 1 way
    //     //? setCategories([...categories, 'one piece']);
    //     //2 way
    //     setCategories(cats => [...cats, 'one piece']);

    // }
    return (
        <>
            <h2>GiExportapp</h2>
            <AddCategory
                setCategories={setCategories}
            />

            <hr />


            <ol>
                {categories.map(category => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </>
    )
}

export default GitExportApp

import { Button } from '@/components/ui/button';
import React from 'react'
import postData from '../../data/postData'

const DataMovies = () => {
    return (
        <div
            className='m-5'
        >
            <form action={postData}>
                <Button
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default DataMovies;
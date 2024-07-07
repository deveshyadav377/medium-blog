import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton.tsx";
import { Footer } from "../components/Footer.tsx";
import { useBlogs } from "../hooks";
import { format } from 'date-fns';

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <Footer/>
        </div>
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishDate={format(new Date(blog.publishDate), 'PPP')}
                />)}
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <Footer/>
    </div>
}
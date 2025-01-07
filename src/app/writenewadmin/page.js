'use client'
import React, { useEffect, useState } from 'react'
import { Editor as TinyMECEditor } from "@tinymce/tinymce-react"
import Navbar from '@/components/Header'
import { API_SERVICE_URL } from '@/config'

const BlogEditorPage = () => {
    const [value, setValue] = useState("")
    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")
    const [allBlogs, setAllBlogs] = useState([])
    const [title, setTitle] = useState("")

    const onEditorInputChange = (newValue, editor) => {
        setValue(newValue)
        setText(editor.getContent({ format: "text" }))
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    const savePublishBlog = async (status) => {
        const dataSend = {
            title,
            content: value,
            author,
            plainContent: text,
            status
        }

        try {
            const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/submitnewblog`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataSend),
            })

            if (res.status === 200) {
                alert("Blog Submitted Successfully!")
                getAllBlogs()
            } else {
                alert("Something went wrong!")
            }
        } catch (error) {
            console.error("Error saving blog:", error)
            alert("Failed to save blog")
        }
    }

    const getAllBlogs = async () => {
        try {
            const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/getallpublishedblogs/ALL`)
            const data = await res.json()
            setAllBlogs(data?.data)
        } catch (error) {
            console.error("Error fetching blogs:", error)
        }
    }

    const editBlog = async (blog) => {
        setTitle(blog?.title)
        setValue(blog?.content)
        setAuthor(blog?.author)
        alert("Blog Loaded Successfully!")
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <main className="pt-5">
                <div className="container">
                    {/* Editor Section */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <TinyMECEditor
                                apiKey="k7ghb4talv8f0rwej36b6r4nnb82emd35ks6x1zs4oq0cikl"
                                onEditorChange={onEditorInputChange}
                                onInit={(evt, editor) => setText(editor.getContent({ format: "text" }))}
                                value={value}
                                initialValue={''}
                                init={{
                                    height: 800,
                                    plugins: [
                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 
                                        'image', 'link', 'lists', 'media', 'searchreplace', 'table', 
                                        'visualblocks', 'wordcount', 'checklist', 'mediaembed', 
                                        'casechange', 'export', 'formatpainter', 'pageembed', 
                                        'a11ychecker', 'tinymcespellchecker', 'permanentpen', 
                                        'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 
                                        'ai', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 
                                        'autocorrect', 'typography', 'inlinecss', 'markdown',
                                        'importword', 'exportword', 'exportpdf'
                                    ],
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                                }}
                            />
                        </div>
                    </div>

                    {/* Blog Details Form */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="mb-3">
                                <input 
                                    type="text"
                                    value={title}
                                    placeholder="Blog Title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <input 
                                    type="text"
                                    value={author}
                                    placeholder="Author Name"
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="d-grid gap-2">
                                <button 
                                    onClick={() => savePublishBlog("DRAFT")}
                                    className="btn btn-secondary"
                                >
                                    Save as Draft
                                </button>

                                <button 
                                    onClick={() => savePublishBlog("PUBLISH")}
                                    className="btn btn-primary"
                                >
                                    Save & Publish
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* All Blogs Section */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="h4 mb-0">All Blogs</h3>
                        </div>
                        <div className="card-body">
                            {allBlogs.map((item, index) => (
                                <div key={index} className="border-bottom pb-4 mb-4">
                                    <h4 className="mb-2">{item.title}</h4>
                                    <p className="text-muted mb-3">Author: {item.author}</p>
                                    <p className="mb-3">
                                        Status: <span className="fw-bold">{item?.status}</span>
                                    </p>
                                    <div 
                                        className="mb-3"
                                        dangerouslySetInnerHTML={{ __html: item.content }} 
                                    />
                                    
                                    <div className="d-flex gap-2">
                                        <a 
                                            href={`/view/${item.blogPublicId}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-success"
                                        >
                                            View Blog
                                        </a>

                                        <button 
                                            onClick={() => editBlog(item)}
                                            className="btn btn-secondary"
                                        >
                                            Edit Blog
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogEditorPage
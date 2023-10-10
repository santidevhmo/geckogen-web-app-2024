const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <img
                    className="animate-spin"
                    src="/loading.png" alt="" />
            </div>
        </div>
    )
}

export default Loading
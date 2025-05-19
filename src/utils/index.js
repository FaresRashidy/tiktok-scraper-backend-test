export function handleError(res, error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
}

export function formatResponse(data) {
    return {
        success: true,
        data,
    };
}
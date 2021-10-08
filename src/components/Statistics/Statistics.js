export function Statistics({good, neutral, bad, total, percentage}) {
    return (
        <div>
            <h2>Statistics</h2>
            <span>Good: { good } </span>
            <span>Neutral: { neutral } </span>
            <span>Bad: {bad} </span>
            <span>Total: {total} </span>
            <span>Positive Feedback: {percentage} %</span>
        </div>
 )
}
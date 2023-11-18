// log-ingestor-client.js
$(document).ready(() => {
    $('#logForm').submit((event) => {
        event.preventDefault();
        const logData = $('#logInput').val();
        ingestLog(logData);
    });

    function ingestLog(logData) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/ingest',
            contentType: 'application/json',
            data: JSON.stringify({ log: logData }),
            success: (data) => {
                console.log('Log ingested successfully:', data);
            },
            error: (error) => {
                console.error('Error ingesting log:', error);
            },
        });
    }
});

jQuery(function ($) {

    $('.ajaxForm').submit(function (e) {
        e.preventDefault();
        var href = $(this).attr('action'),
            notifications = $(this).children('.notifications');

        // Reset notifications
        notifications.html('');

        // Submit form data
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: href,
            data: $(this).serialize(),
            success: (response) => {
                if (response.status == 'success') {
                    // Reset form values and show success message
                    $(this).trigger('reset');
                    notifications.html('<div class="info-msg success-msg">Your email has successfully been sent!</div>');
                } else {
                    // Show error message
                    notifications.html('<div class="info-msg error-msgs">' + response.message + '</div>');
                }
            }
        });
    });
});
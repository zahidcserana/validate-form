var cLeaping = {};
jQuery(document).ready(function () {
    var id = jQuery(".main_page_content").attr("id");
    if (id && id.length > 0)
        cLeaping[id]();
});

cLeaping.Account_profile = function () {
    $("form[name='profile_form']").validate({
        onkeyup: false,
        onfocusout: false,
        errorElement: false,
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            city: {
                required: true
            },
            zip_code: {
                required: true
            }
        },
        messages: {
            first_name: {required: 'Please Enter First Name'},
            last_name: {required: 'Please Enter Last Name'},
            city: {required: 'Please Enter City Name'},
            zip_code: {required: 'Please Enter Zip Code'},
        },
        submitHandler: function(form) {
            form.submit();
        }
    })

}

cLeaping.user_add = function () {
    $("form[name='add-form']").validate({
        rules: {
            email: {
                required: true,
                email: true,
                minlength: 2
            },
            first_name: {
                required: true,
                minlength: 2
            },
            last_name: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 2
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            },
            city: {
                required: true
            },
            zip_code: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            first_name: {required: 'Please Enter First Name'},
            email: {required: 'Please Enter a Email',email: 'Please Enter a Valid Email'},
            last_name: {required: 'Please Enter Last Name'},
            city: {required: 'Please Enter City Name'},
            zip_code: {required: 'Please Enter Zip Code'},
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
}

cLeaping.story_add = function () {
    $("form[name='add-story']").validate({
        rules: {
            title: {
                required: true
            },
            description: {
                required: true,
                minlength: 10
            },
            rating_average: {
                required: true
            }
        },
        messages: {
            title: {required: 'Please Enter a Title'},
            description: {required: 'Please Enter description'},
            rating_average: {required: 'Please Enter Your Rating Average'},
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
}






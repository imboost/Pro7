$$(document).on('click', '#code-if', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "if (variable === 0) {\n" +
        "\tresult = false;\n" +
        "}";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-if-else', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "if (variable === 0) {\n" +
        "\tresult = false;\n" +
        "} else {\n" +
        "\tresult = true;\n" +
        "}";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-if-else-if', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "if (variable === 0) {\n" +
        "\tresult = false;\n" +
        "} else if (variable === 1){\n" +
        "\tresult = true;\n" +
        "}";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-init', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:init', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-reinit', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:reinit', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-beforein', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:beforein', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-beforeout', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:beforeout', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterout', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterout', '.page[data-name=\"your_page_name\"]', function(callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin-preloader', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function (callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n\n" +
        "\tapp.preloader.show();\n" +
        "\tsetTimeout(function () {//Wait for 5 Sec\n" +
        "\t\tapp.preloader.hide();\n" +
        "\t}, 5000);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin-progress', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function (callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n\n" +
        "\tapp.progressbar.show();\n" +
        "\tsetTimeout(function () {//Wait for 5 Sec\n" +
        "\t\tapp.progressbar.hide();\n" +
        "\t}, 5000);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin-progress-multi', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function (callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n\n" +
        "\tapp.progressbar.show('multi');\n" +
        "\tsetTimeout(function () {//Wait for 5 Sec\n" +
        "\t\tapp.progressbar.hide();\n" +
        "\t}, 5000);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin-dialog-preloader', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function (callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n\n" +
        "\tapp.dialog.preloader('Loading');\n" +
        "\tsetTimeout(function () {//Wait for 5 Sec\n" +
        "\t\tapp.dialog.close();\n" +
        "\t}, 5000);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-page-afterin-dialog-progress', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('page:afterin', '.page[data-name=\"your_page_name\"]', function (callback) {\n" +
        "\tconsole.log(callback.detail.route.params);\n\n" +
        "\tapp.dialog.progress('Loading');\n" +
        "\tsetTimeout(function () {//Wait for 5 Sec\n" +
        "\t\tapp.dialog.close();\n" +
        "\t}, 5000);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-selector-click', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('click', '#selector_id_or_class', function () {\n" +
        "\tapp.dialog.alert('click');\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-selector-change', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('change', '#selector_id_or_class', function () {\n" +
        "\tapp.dialog.alert('change');\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-selector-keyup', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('keyup', '#selector_id_or_class', function () {\n" +
        "\tapp.dialog.alert('keyup');\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-selector-keydown', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "$$(document).on('keydown', '#selector_id_or_class', function () {\n" +
        "\tapp.dialog.alert('keydown');\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-notifications-full-layout', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.notification.create({\n" +
        "\ticon: '<i class=\"icon material-icons\">notifications</i>',\n" +
        "\ttitle: 'Visual7',\n" +
        "\ttitleRightText: 'now',\n" +
        "\tsubtitle: 'This is a subtitle',\n" +
        "\ttext: 'This is a simple notification message',\n" +
        "\tcloseTimeout: 3000,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Notification closed');\n" +
        "\t\t},\n" +
        "\t},\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-notifications-close-button', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.notification.create({\n" +
        "\ticon: '<i class=\"icon material-icons\">notifications</i>',\n" +
        "\ttitle: 'Visual7',\n" +
        "\ttitleRightText: 'now',\n" +
        "\tsubtitle: 'This is a subtitle',\n" +
        "\ttext: 'This is a simple notification message',\n" +
        "\tcloseButton: true,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Notification closed');\n" +
        "\t\t},\n" +
        "\t},\n" +
        "}).open()";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-notifications-click-close', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.notification.create({\n" +
        "\ticon: '<i class=\"icon material-icons\">notifications</i>',\n" +
        "\ttitle: 'Visual7',\n" +
        "\ttitleRightText: 'now',\n" +
        "\tsubtitle: 'This is a subtitle',\n" +
        "\ttext: 'This is a simple notification message',\n" +
        "\tcloseOnClick: true,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Notification closed');\n" +
        "\t\t},\n" +
        "\t},\n" +
        "}).open()";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-top', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\tposition: 'top',\n" +
        "\tcloseTimeout: 2000,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-bottom', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\tcloseTimeout: 2000,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-center', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\tposition: 'center',\n" +
        "\tcloseTimeout: 2000,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-center-icon', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\ticon: app.theme === 'ios' ? '<i class=\"material-icons\">notifications</i>' : '<i class=\"material-icons\">notifications_none</i>',\n" +
        "\tposition: 'center',\n" +
        "\tcloseTimeout: 2000,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-close-button', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\tcloseButton: true,\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-toast-custom-close-button', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.toast.create({\n" +
        "\ttext: 'Toast',\n" +
        "\tcloseButton: true,\n" +
        "\tcloseButtonText: 'Close Me',\n" +
        "\tcloseButtonColor: 'red',\n" +
        "\ton: {\n" +
        "\t\tclose: function () {\n" +
        "\t\t\tapp.dialog.alert('Toast Closed');\n" +
        "\t\t},\n" +
        "\t}\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-alert', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.alert('Description', 'Title');";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-confirmation', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.confirm('Are you feel good today?', function() {\n" +
        "\tapp.dialog.alert('Yes');\n" +
        "}, function() {\n" +
        "\tapp.dialog.alert('No');\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-prompt', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.prompt('What is your name?', function(name) {\n" +
        "\tapp.dialog.alert('Ok, your name is ' + name);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-horizontal', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.create({\n" +
        "\ttitle: 'Title',\n" +
        "\ttext: 'Information',\n" +
        "\tbuttons: [{\n" +
        "\t\t\ttext: 'Option',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Option');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t\t{\n" +
        "\t\t\ttext: 'Cancel',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Cancel');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t\t{\n" +
        "\t\t\ttext: 'Yes',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Yes');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t]\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-vertical', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.create({\n" +
        "\ttitle: 'Title',\n" +
        "\ttext: 'Information',\n" +
        "\tbuttons: [{\n" +
        "\t\t\ttext: 'Option',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Option');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t\t{\n" +
        "\t\t\ttext: 'Cancel',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Cancel');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t\t{\n" +
        "\t\t\ttext: 'Yes',\n" +
        "\t\t\tonClick: function() {\n" +
        "\t\t\t\tapp.dialog.alert('Yes');\n" +
        "\t\t\t}\n" +
        "\t\t},\n" +
        "\t],\n" +
        "\tverticalButtons: true\n" +
        "}).open();";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-login', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.login('Enter your username and password', function(username, password) {\n" +
        "\tapp.dialog.alert('Thank you!<br>Username:' + username + '<br>Password:' + password);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-password', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.password('Enter your username and password', function(password) {\n" +
        "\tapp.dialog.alert('Thank you!<br>Password:' + password);\n" +
        "});";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-preloader', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.preloader('Title');\n" +
        "setTimeout(function() {\n" +
        "\tapp.dialog.close();\n" +
        "}, 3000);";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-progress', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "app.dialog.progress('Title');\n" +
        "setTimeout(function() {\n" +
        "\tapp.dialog.close();\n" +
        "}, 3000);";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});

$$(document).on('click', '#code-dialog-progress-percent', function() {
    app.popover.close();

    var position = we[active_tab_file].getPosition();
    var text = we[active_tab_file].getValue(position);
    var splitedText = text.split("\n");
    var lineContent = splitedText[position.lineNumber - 1];
    var textToInsert = "var progress = 0;\n" +
        "var dialog = app.dialog.progress('Loading assets', progress);\n" +
        "dialog.setText('Image 1 of 10');\n" +
        "var interval = setInterval(function() {\n" +
        "\tprogress += 10;\n" +
        "\tdialog.setProgress(progress);\n" +
        "\tdialog.setText('Image ' + ((progress) / 10) + ' of 10');\n" +
        "\tif (progress === 100) {\n" +
        "\t\tclearInterval(interval);\n" +
        "\t\tdialog.close();\n" +
        "\t}\n" +
        "}, 300);";
    splitedText[position.lineNumber - 1] = [lineContent.slice(0, position.column - 1), textToInsert, lineContent.slice(position.column - 1)].join(''); // Append the text exactly at the selected position (position.column -1)
    we[active_tab_file].setValue(splitedText.join("\n"));
    we[active_tab_file].setPosition(position);
});
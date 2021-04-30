$(document).ready(function(){
    // عند الضغط على العنصر الدي يمتلك الصنف search-filters-icon
    $("#search-filters-icon").click(function(){
        // عن طريق الدالة slideToggle دات الميزة slow  قم باخفاء واظهار الاعمدة او العناصر دات الصنف filter-column
        // الميزة slow تعني افتح القائمة واغلقها بلطف وببطئ
        $(".filter-column").slideToggle("slow");
    });
// هنا قمنا بتحديد الصندوق ثم قلنا انه عند الضغط عليه قم بتنفيد الدالة التالية
    $("input:checkbox").click(function(){
        var $box = $(this);
// ادا حدد المستخدم الصندوق والدي قمنا باعطائه المتغير الخاص box
        if ($box.is(":checked")){
            // هنا قمنا بتحديد جميع الاعمدة ودلك عن طريق احضار اسماء عناصرها name عن طريق الدالة attr
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // هنا قمنا بجعل جميع الصناديق التي ضمن الاعمدة غير مفعلة
            $(group).prop("checked" , false);
            // هنا قمنا بتفعيل الصندوق الدي تم الضغط عليه
            $box.prop("checked" , true);
        }
    });
});
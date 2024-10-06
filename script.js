const password = 'ZIYAD.LH';
const questions = [
    {
        question: "ما هو تعريف علم الاجتماع؟",
        answers: ["A) علم دراسة المجتمع", "B) علم النفس", "C) علم الطبيعة"],
        correct: 0
    },
    {
        question: "من هو مؤسس علم الاجتماع الحديث؟",
        answers: ["A) أوغست كونت", "B) كارل ماركس", "C) ماكس فيبر"],
        correct: 0
    },
    {
        question: "ما هي الوحدة الأساسية للدراسة في علم الاجتماع؟",
        answers: ["A) الفرد", "B) الجماعة", "C) المجتمع"],
        correct: 2
    },
    {
        question: "ما هو المفهوم الذي يشير إلى تفاعل الأفراد داخل المجتمع؟",
        answers: ["A) الثقافة", "B) التفاعل الاجتماعي", "C) الهوية"],
        correct: 1
    },
    {
        question: "من كتب كتاب 'القواعد الأساسية لعلم الاجتماع'؟",
        answers: ["A) إميل دوركايم", "B) ماكس فيبر", "C) توماس هوبز"],
        correct: 0
    },
    {
        question: "ما هي النظرية التي تتحدث عن الصراع بين الطبقات؟",
        answers: ["A) النظرية الوظيفية", "B) النظرية التفاعلية", "C) نظرية الصراع"],
        correct: 2
    },
    {
        question: "ما هي الأبعاد الرئيسية لعلم الاجتماع؟",
        answers: ["A) البعد الاجتماعي, البعد الاقتصادي", "B) البعد الثقافي, البعد البيئي", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم الثقافة؟",
        answers: ["A) مجموعة من القيم والعادات", "B) الأنماط السلوكية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو علم الأنتروبولوجيا؟",
        answers: ["A) دراسة الإنسان", "B) دراسة الثقافة", "C) دراسة المجتمع"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الهوية الاجتماعية'؟",
        answers: ["A) كيف يرى الفرد نفسه", "B) كيف يراه الآخرون", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'التغيير الاجتماعي'؟",
        answers: ["A) تغيير القيم فقط", "B) تغيير الهيكل الاجتماعي", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "من هو عالم الاجتماع الذي قدم نظرية 'التفاعل الرمزي'؟",
        answers: ["A) إميل دوركايم", "B) جورج هربرت ميد", "C) ماكس فيبر"],
        correct: 1
    },
    {
        question: "ما هي العلاقة بين الثقافة والمجتمع؟",
        answers: ["A) الثقافة هي جزء من المجتمع", "B) المجتمع هو جزء من الثقافة", "C) لا توجد علاقة"],
        correct: 0
    },
    {
        question: "ما هي النظم الاجتماعية؟",
        answers: ["A) مجموعة من القوانين", "B) مجموعة من الأدوار والعلاقات", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الدور الاجتماعي'؟",
        answers: ["A) سلوك الفرد في المجتمع", "B) وظيفة الفرد في مجموعة معينة", "C) جميع ما سبق"],
        correct: 1
    },
    {
        question: "من هو مؤسس المدرسة الوظيفية في علم الاجتماع؟",
        answers: ["A) إميل دوركايم", "B) أوغست كونت", "C) كارل ماركس"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الأسرة النووية'؟",
        answers: ["A) أسرة تتكون من أب وأم وأطفال", "B) أسرة ممتدة تشمل الأقارب", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو علم الاجتماع الحضري؟",
        answers: ["A) دراسة القرى", "B) دراسة المجتمعات الحضرية", "C) دراسة الحياة الريفية"],
        correct: 1
    },
    {
        question: "ما هي العوامل المؤثرة في التغيير الاجتماعي؟",
        answers: ["A) التكنولوجيا", "B) الاقتصاد", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الطبقة الاجتماعية'؟",
        answers: ["A) مجموعة من الأفراد بناءً على الدخل", "B) مجموعة من الأفراد بناءً على الثقافة", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "من هو عالم الاجتماع الذي قام بدراسة القيم البروتستانتية؟",
        answers: ["A) ماكس فيبر", "B) إميل دوركايم", "C) كارل ماركس"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التضامن الاجتماعي'؟",
        answers: ["A) الاعتماد المتبادل بين الأفراد", "B) الوحدة بين الأفراد", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هي النظم الثقافية؟",
        answers: ["A) القيم, المعتقدات, العادات", "B) العادات فقط", "C) القيم فقط"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المؤسسة الاجتماعية'؟",
        answers: ["A) مجموعة من الأفراد", "B) نظام من القوانين", "C) نظام من العلاقات الاجتماعية"],
        correct: 2
    },
    {
        question: "ما هي الوسائل التي تستخدمها المجتمعات لنقل الثقافة؟",
        answers: ["A) التعليم", "B) وسائل الإعلام", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو علم الاجتماع الاقتصادي؟",
        answers: ["A) دراسة الاقتصاد فقط", "B) دراسة تأثير الاقتصاد على المجتمع", "C) دراسة المجتمع فقط"],
        correct: 1
    },
    {
        question: "ما هو مفهوم 'العولمة' في علم الاجتماع؟",
        answers: ["A) تواصل الثقافات المختلفة", "B) انغلاق الثقافات", "C) عدم التفاعل الثقافي"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الهوية الثقافية'؟",
        answers: ["A) انتماء الفرد إلى ثقافة معينة", "B) اختلاف الثقافات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير وسائل الإعلام على الثقافة؟",
        answers: ["A) تعزيز الثقافة", "B) تآكل الثقافة", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هي عناصر الثقافة؟",
        answers: ["A) اللغة, الدين, العادات", "B) الاقتصاد, السياسة, القيم", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'النمو الاجتماعي'؟",
        answers: ["A) زيادة عدد السكان", "B) تحسين الظروف المعيشية", "C) جميع ما سبق"],
        correct: 1
    },
    {
        question: "ما هي العوامل التي تؤثر على الهوية الاجتماعية؟",
        answers: ["A) العرق", "B) الجنس", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "من هو عالم الاجتماع الذي عرف بدراسة الأديان؟",
        answers: ["A) إميل دوركايم", "B) كارل ماركس", "C) ماكس فيبر"],
        correct: 0
    },
    {
        question: "ما هو دور الفنون في المجتمع؟",
        answers: ["A) تعبير عن الثقافة", "B) تحفيز الإبداع", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'السلوك الاجتماعي'؟",
        answers: ["A) سلوك الفرد في المجتمع", "B) سلوك الأفراد تجاه بعضهم", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هي التحديات التي تواجه المجتمعات الحديثة؟",
        answers: ["A) الفقر", "B) العنف", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'التماسك الاجتماعي'؟",
        answers: ["A) التفاعل بين الأفراد", "B) التفاهم بين الأفراد", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هي أشكال الحكم في علم الاجتماع؟",
        answers: ["A) الديمقراطية", "B) الديكتاتورية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو علم الاجتماع الريفي؟",
        answers: ["A) دراسة المدن", "B) دراسة القرى والمجتمعات الريفية", "C) دراسة المجتمعات الحضرية"],
        correct: 1
    },
    {
        question: "ما هو مفهوم 'التنوع الثقافي'؟",
        answers: ["A) وجود ثقافات مختلفة", "B) تشابه الثقافات", "C) عدم وجود ثقافات"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المدنية' في علم الاجتماع؟",
        answers: ["A) الحياة في المدن", "B) الحياة الريفية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "من هو عالم الاجتماع المعروف بنظرياته حول العائلة؟",
        answers: ["A) إميل دوركايم", "B) ماكس فيبر", "C) آني أرنوت"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الصراع الطبقي'؟",
        answers: ["A) التنافس بين الأفراد", "B) التنافس بين الطبقات الاجتماعية", "C) جميع ما سبق"],
        correct: 1
    },
    {
        question: "ما هو تأثير التعليم على المجتمع؟",
        answers: ["A) تحسين الظروف الاقتصادية", "B) تعزيز الوعي الاجتماعي", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الهوية الوطنية'؟",
        answers: ["A) انتماء الفرد لوطن معين", "B) تفاعل الثقافات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هي أنواع المجتمعات؟",
        answers: ["A) مجتمعات تقليدية", "B) مجتمعات حديثة", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو علم الاجتماع التربوي؟",
        answers: ["A) دراسة التعليم", "B) دراسة المؤسسات التعليمية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الاستبعاد الاجتماعي'؟",
        answers: ["A) عدم شمول الأفراد في المجتمع", "B) شمول الأفراد في المجتمع", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "من هو عالم الاجتماع المعروف بنظرياته حول الاقتصاد؟",
        answers: ["A) إميل دوركايم", "B) ماكس فيبر", "C) كارل ماركس"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'التفاعل الاجتماعي'؟",
        answers: ["A) التفاعل بين الأفراد", "B) التفاعل بين الثقافات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير التكنولوجيا على المجتمع؟",
        answers: ["A) تحسين الحياة", "B) تدمير العلاقات الاجتماعية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'المسؤولية الاجتماعية'؟",
        answers: ["A) مسؤولية الفرد تجاه المجتمع", "B) مسؤولية المجتمع تجاه الفرد", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هي أهم العناصر المؤثرة في الهوية؟",
        answers: ["A) الثقافة", "B) الدين", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو دور المنظمات غير الحكومية في المجتمع؟",
        answers: ["A) تحسين الظروف الاجتماعية", "B) دعم الحقوق المدنية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الرفاه الاجتماعي'؟",
        answers: ["A) تحسين جودة الحياة", "B) زيادة الدخل فقط", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الفنون في التعبير عن الثقافة؟",
        answers: ["A) توثيق الأحداث التاريخية", "B) التعبير عن المشاعر", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هي أهداف علم الاجتماع؟",
        answers: ["A) فهم السلوك الاجتماعي", "B) تحسين المجتمع", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الأيديولوجيا'؟",
        answers: ["A) مجموعة من الأفكار", "B) نظام من المعتقدات", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "من هو عالم الاجتماع الذي قام بدراسة الثقافات المتنوعة؟",
        answers: ["A) إميل دوركايم", "B) ماكس فيبر", "C) فيكتور تورنر"],
        correct: 2
    },
    {
        question: "ما هو تأثير الفقر على المجتمع؟",
        answers: ["A) زيادة الجرائم", "B) تحسين العلاقات الاجتماعية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التمييز الاجتماعي'؟",
        answers: ["A) الفرق بين الأفراد", "B) عدم المساواة بين الأفراد", "C) جميع ما سبق"],
        correct: 1
    },
    {
        question: "ما هو تأثير العولمة على الثقافات المحلية؟",
        answers: ["A) تعزيز الهوية", "B) تآكل الهوية", "C) جميع ما سبق"],
        correct: 1
    },
    {
        question: "ما هو مفهوم 'العدالة الاجتماعية'؟",
        answers: ["A) توازن الحقوق والواجبات", "B) عدم المساواة", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور المؤسسات التعليمية في المجتمع؟",
        answers: ["A) تعليم الأفراد", "B) تعزيز الثقافة", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو تأثير التكنولوجيا على التعليم؟",
        answers: ["A) تحسين التعليم", "B) تقليل الفعالية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الإدماج الاجتماعي'؟",
        answers: ["A) شمول الأفراد في المجتمع", "B) استبعاد الأفراد", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هي أنواع المجتمعات في علم الاجتماع؟",
        answers: ["A) مجتمعات متقدمة", "B) مجتمعات نامية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو دور الشباب في المجتمع؟",
        answers: ["A) تحقيق التغيير الاجتماعي", "B) الحفاظ على القيم", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو تأثير الثقافة الشعبية على المجتمع؟",
        answers: ["A) تعزيز القيم السلبية", "B) تعزيز القيم الإيجابية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'العمل الجماعي'؟",
        answers: ["A) التعاون بين الأفراد", "B) المنافسة بين الأفراد", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور المنظمات الحكومية في المجتمع؟",
        answers: ["A) تنظيم المجتمع", "B) تقديم الخدمات", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو تأثير البطالة على المجتمع؟",
        answers: ["A) زيادة الفقر", "B) تحسين العلاقات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التمكين الاجتماعي'؟",
        answers: ["A) تعزيز القوة الفردية", "B) تعزيز الضعف", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هي أنواع الأسر؟",
        answers: ["A) أسر نووية", "B) أسر ممتدة", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'العمل الاجتماعي'؟",
        answers: ["A) تقديم المساعدة للآخرين", "B) البحث عن الفائدة الشخصية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور المؤسسات الثقافية في المجتمع؟",
        answers: ["A) تعزيز الهوية", "B) نشر الثقافة", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'التنوع البيولوجي'؟",
        answers: ["A) تنوع الأنواع في البيئة", "B) عدم تنوع الأنواع", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير الوعي الاجتماعي على التغيير الاجتماعي؟",
        answers: ["A) تعزيز التغيير", "B) عدم التغيير", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هي أنواع القيم في علم الاجتماع؟",
        answers: ["A) القيم المادية", "B) القيم الروحية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الحقوق المدنية'؟",
        answers: ["A) حقوق الأفراد في المجتمع", "B) حقوق الجماعات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الإعلام في تشكيل الثقافة؟",
        answers: ["A) نشر المعلومات", "B) تعزيز القيم الاجتماعية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'التنمية المستدامة'؟",
        answers: ["A) التنمية التي تلبي احتياجات الحاضر دون التأثير على المستقبل", "B) التنمية العشوائية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير الفنون على الهوية الثقافية؟",
        answers: ["A) تعزيز الهوية", "B) إضعاف الهوية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المشاركة المجتمعية'؟",
        answers: ["A) مشاركة الأفراد في المجتمع", "B) عزلة الأفراد", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الأسرة في المجتمع؟",
        answers: ["A) تعزيز القيم", "B) تقديم الدعم", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الحق في التعليم'؟",
        answers: ["A) حق الأفراد في الحصول على التعليم", "B) عدم حق الأفراد في التعليم", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير الهوية الثقافية على الفرد؟",
        answers: ["A) تعزيز الانتماء", "B) إضعاف الانتماء", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'العمل التطوعي'؟",
        answers: ["A) تقديم الخدمة دون مقابل", "B) البحث عن الربح", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الشباب في التنمية المستدامة؟",
        answers: ["A) تحقيق التغيير الإيجابي", "B) عدم المشاركة", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الهوية الثقافية'؟",
        answers: ["A) السمات المميزة لثقافة معينة", "B) عدم وجود هوية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو تأثير البيئة على الثقافة؟",
        answers: ["A) تشكيل القيم", "B) عدم التأثير", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'العمل الخيري'؟",
        answers: ["A) تقديم المساعدة للمحتاجين", "B) البحث عن الربح", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور التعليم في تشكيل القيم؟",
        answers: ["A) تعليم السلوكيات", "B) تعزيز القيم الاجتماعية", "C) جميع ما سبق"],
        correct: 2
    },
    {
        question: "ما هو تأثير الانتماء الاجتماعي على الهوية؟",
        answers: ["A) تعزيز الهوية", "B) إضعاف الهوية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الاندماج الثقافي'؟",
        answers: ["A) تفاعل الثقافات المختلفة", "B) عدم تفاعل الثقافات", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الإعلام في تحقيق التنمية؟",
        answers: ["A) تعزيز الوعي", "B) عدم التوعية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'العدالة الانتقالية'؟",
        answers: ["A) تحقيق العدالة بعد النزاعات", "B) عدم تحقيق العدالة", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور الثقافة في تحقيق الهوية؟",
        answers: ["A) تعزيز الهوية", "B) إضعاف الهوية", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المسؤولية الفردية'؟",
        answers: ["A) مسؤولية الفرد تجاه نفسه", "B) مسؤولية الفرد تجاه الآخرين", "C) جميع ما سبق"],
        correct: 0
    },
    {
        question: "ما هو دور المؤسسات الصحية في المجتمع؟",
        answers: ["A) تقديم الخدمات الصحية", "B) تعزيز الوعي الصحي", "C) جميع ما سبق"],
        correct: 2
    }
];

const welcomeMessages = [
    "!مرحباً بك في اختبار علم الاجتماع",
    "!أهلاً وسهلاً، نأمل أن تستمتع بالاختبار",
    "!نتمنى لك حظاً موفقاً في الاختبار",
    "!ابدأ مغامرتك في علم الاجتماع الآن",
    "!مرحباً بك، هيا نبدأ تحدي علم الاجتماع"
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function startQuiz() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === password) {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("name-screen").style.display = "block"; // عرض شاشة الاسم
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function showWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    const welcomeMessage = welcomeMessages[randomIndex];
    document.getElementById("welcome-message").innerText = welcomeMessage;
    document.getElementById("name-screen").style.display = "none"; // إخفاء شاشة الاسم
    document.getElementById("message-screen").style.display = "block"; // عرض شاشة الرسالة الترحيبية
}

function startQuizWithName() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    showWelcomeMessage();
}

function startQuizAfterWelcome() {
    document.getElementById("message-screen").style.display = "none"; // إخفاء شاشة الرسالة الترحيبية
    document.getElementById("quiz-screen").style.display = "block"; // إظهار شاشة الاختبار
    showQuestion(); // عرض السؤال الأول
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-message").innerText = `لقد أجبت بشكل صحيح على ${score} من ${questions.length} أسئلة.`;
    document.getElementById("back-btn").addEventListener("click", () => {
        window.location.href = "https://sites.google.com/view/takadom"; // استبدل برابط الصفحة الخارجية
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("password").value = "";
}

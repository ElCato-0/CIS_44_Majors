import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import BaseInfo from './BaseInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='CIS_44_Majors'>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cs" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D8%AF%D8%AB.jpg'
              data={[
                ['البرمجة الشيئية', 'دورة في مجال البرمجة تعلم الطلاب كيفية إنشاء برامج تتعامل مع الكائنات والمفاهيم المتعلقة بها. يتعلمون كيفية تصميم وتطوير تطبيقات قائمة على الكائنات باستخدام لغات البرمجة المناسبة.'],
                ['التصميم الرقمي والمنطقي', 'دورة تعلم الطلاب مبادئ التصميم الرقمي والمنطقي للأنظمة الإلكترونية. يتعلمون كيفية تحليل وتصميم الدوائر الرقمية واستخدام المنطق المنطقي في إنشاء الأنظمة الإلكترونية.'],
                ['الحاسب والمجتمع', 'دورة تعرض للطلاب دور الحاسوب وتأثيره على المجتمع والحياة اليومية. يتعلمون حول التطور التاريخي للحاسوب وتأثيره على المجالات المختلفة مثل التعليم والصناعة والاتصالات.'],

                ['هياكل البيانات', 'دورة تعلم الطلاب عن هياكل البيانات المختلفة وطرق تخزين وتنظيم البيانات في الحواسيب. يتعلمون كيفية استخدام وتحليل وتطبيق هياكل البيانات مثل القوائم المتسلسلة والأشجار والجرافات.'],
                ['مقدمة في الأمن السيبراني', 'دورة تعرض للطلاب مبادئ الأمان السيبراني وكيفية حماية الأنظمة والبيانات من التهديدات الإلكترونية. يتعلمون حول أساسيات الشبكات الآمنة والتشفير وتقنيات الكشف عن الاختراق.'],
                ['تنظيم وعمارة الحاسوب', 'دورة تعلم الطلاب عن تصميم وتنظيم أنظمة الحواسيب وهيكلية المعالج والذاكرة والمكونات الأساسية الأخرى. يتعلمون حول توزيع الموارد وتحسين أداء النظام ومفاهيم العمارة الحاسوبية.'],
                ['أسس هندسة البرمجيات', 'دورة تعرض للطلاب المفاهيم الأساسية لهندسة البرمجيات وعملية تطوير البرامج. يتعلمون عن مراحل التطوير وتقنيات إدارة المشروع واختبار البرمجيات وضمان الجودة.'],
                ['أساسيات قواعد البيانات', 'دورة تعلم الطلاب أساسيات قواعد البيانات وكيفية تنظيم وإدارة المعلومات. يتعلمون حول نماذج قواعد البيانات واستعلام البيانات باستخدام لغة الاستعلام المناسبة.'],

                ['تركيب المترجمات', 'دورة تعلم الطلاب عن تركيب المترجمات وعملية تحويل البرامج من لغة برمجة إلى لغة آلة قابلة للتنفيذ. يتعلمون حول المراحل المختلفة لترجمة البرامج وتحليل وتطبيق القواعد اللغوية.'],
                ['هندسة البرمجيات', 'دورة تعرض للطلاب مفاهيم هندسة البرمجيات وأساليبها في تطوير البرامج. يتعلمون عن تحليل المتطلبات وتصميم النظام واختبار البرمجيات وإدارة التغيير.'],
                ['إدارة المشاريع لعلماء الحاسوب', 'دورة تعلم الطلاب مهارات إدارة المشاريع في سياق علماء الحاسوب. يتعلمون حول التخطيط والتنظيم والتنفيذ والمراقبة والتقييم في إدارة مشاريع الحوسبة.'],
                ['أساسيات الخوازرميات', 'دورة تعلم الطلاب المفاهيم الأساسية للخوارزميات وكيفية حل المشكلات باستخدام الخوارزميات. يتعلمون حول التحليل الزمني والفضائي والخوارزميات الشائعة مثل البحث والفرز.'],
                ['أساسيات نظم التشغيل', 'دورة تعرض للطلاب مفاهيم نظم التشغيل ووظيفتها في إدارة الموارد وتشغيل البرامج. يتعلمون حول تنظيم العمليات وإدارة الذاكرة وجدولة المهام في نظم التشغيل.'],

                ['نظم التشغيل', 'دورة تعمق في مفاهيم نظم التشغيل وعملها. يتعلم الطلاب حول البنية الداخلية لنظم التشغيل وأساسيات تصميم وتطوير نظم التشغيل.'],
                ['الخوارزميات', 'دورة تعمق في مجال الخوارزميات وتحليل الأداء. يتعلم الطلاب عن خوارزميات متقدمة مثل البرمجة الديناميكية والترتيبات المتقدمة والبحث في الرسوم البيانية.'],
                ['توثيق البرمجيات والكتابة التقنية', 'دورة تعلم الطلاب كيفية كتابة التوثيق الفني والتقني للبرامج والأنظمة. يتعلمون حول كتابة المستندات الفنية والوثائق التقنية والتوثيق البرمجي.'],
                ['شبكات الحاسب والاتصالات', 'دورة تعرض للطلاب مفاهيم شبكات الحاسوب واتصالات البيانات. يتعلمون حول بنية الشبكات والبروتوكولات وتوصيل أجهزة الكمبيوتر في بيئة الشبكات.'],
                ['نظم قواعد البيانات', 'دورة تعلم الطلاب حول تصميم وإدارة نظم قواعد البيانات. يتعلمون حول نماذج البيانات المختلفة واستعلام البيانات وتنفيذ عمليات الإدخال والاسترجاع في قواعد البيانات.'],

                ['بناء نظم البرمجيات', 'دورة تعلم الطلاب كيفية بناء أنظمة برمجية معقدة وتطويرها. يتعلمون حول تحليل وتصميم النظام وتقنيات تنفيذ البرمجيات واختبارها وصيانتها.'],
                ['أساسيات تطوير الويب', 'دورة تعرض للطلاب أساسيات تطوير تطبيقات الويب. يتعلمون حول لغات البرمجة الشائعة في تطوير الويب وتصميم وتنفيذ صفحات الويب التفاعلية.'],
                ['برمجة متقدمة', 'دورة تعمق في مجال البرمجة وتقنياتها المتقدمة. يتعلم الطلاب عن تقنيات البرمجة المتقدمة مثل البرمجة الموجهة بالأحداث والبرمجة الوظيفية والبرمجة التفاعلية.'],
                ['مبادئ وتقنيات الذكاء الاصطناعي', 'دورة تعرض للطلاب مبادئ وتقنيات الذكاء الاصطناعي وتطبيقاتها في مجالات مختلفة. يتعلمون حول تصميم وتنفيذ نماذج الذكاء الاصطناعي وتحليل البيانات وتعلم الآلة.'],
                ['مقدمة في التشفير', 'دورة تعرض للطلاب مبادئ التشفير وأساليب حماية المعلومات. يتعلمون حول أساسيات التشفير وتقنيات تبادل المفاتيح وتوقيع الرسائل الرقمية.'],

                ['الحوسبة العلمية', 'دورة تعرض للطلاب استخدام الحوسبة في التطبيقات العلمية والحسابية. يتعلمون حول تطبيقات الحوسبة العلمية في الفيزياء والكيمياء والهندسة وعلوم الحاسوب الأخرى.'],
                ['تصميم واجهات المستخدم', 'دورة تعلم الطلاب مفاهيم تصميم واجهات المستخدم الجذابة والسهلة الاستخدام. يتعلمون حول تحليل احتياجات المستخدم وتصميم واجهات المستخدم واختبارها وتقييمها.'],
                ['تطوير تطبيقات الجوّال', 'دورة تعلم الطلاب تطوير تطبيقات الجوّال لأنظمة التشغيل المختلفة. يتعلمون حول تصميم وتنفيذ تطبيقات الجوّال القابلة للتوسع والتفاعلية.'],

                ["الرسومات بالحاسب", "في هذه الدورة، يتعلم الطلاب حول مفاهيم الرسومات الكمبيوترية وتقنياتها. يتعلمون حول تصميم وإنشاء الرسومات ثنائية الأبعاد وثلاثية الأبعاد وتطبيقها في البرامج وألعاب الكمبيوتر. يتعلمون أيضًا حول تقنيات الرسوم المتقدمة مثل الإضاءة والتظليل وتحريك الرسومات."]
              ]}
            />}
          />
          <Route path="/ce" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A%20%D9%88%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D9%87%D9%86%D8%AF%D8%B3%D8%A9%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A%20%D9%88%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA.jpg'
              data={[
                ['التصميم الرقمي والمنطقي', 'دورة تعلم الطلاب مبادئ التصميم الرقمي والمنطقي للأنظمة الإلكترونية. يتعلمون كيفية تحليل وتصميم الدوائر الرقمية واستخدام المنطق المنطقي في إنشاء الأنظمة الإلكترونية.'],
                ["الفيزياء للمهندسين", "دورة تعلم الطلاب مبادئ الفيزياء الهندسية وتطبيقاتها في الهندسة. يتعلمون حول الحركة والقوى والطاقة والحرارة والموجات والصوت والضوء والكهرباء والمغناطيسية والنظرية النسبية والكمية."],

                ["اساسيات الشبكات وتطبيقاتها", "دورة تعلم الطلاب مبادئ الشبكات وتطبيقاتها في الحياة العملية. يتعلمون حول تصميم وتنفيذ وإدارة الشبكات والاتصالات والأنظمة اللاسلكية والأمن السيبراني."]
                ["كيمياء عامة", ""],

                ["تنسيق الحاسب الالي", ""],

                ["نظرية الدوائر", "دورة نظرية الدوائر تعرض للطلاب المفاهيم الأساسية في مجال نظرية الدوائر الإلكترونية. يتعلم الطلاب حول التصميم والتحليل والتشغيل للدوائر الإلكترونية المنطقية. يتضمن ذلك دراسة المكونات الأساسية للدوائر مثل البوابات المنطقية والوصلات والمتغيرات والمقاومات. يتعلم الطلاب كيفية استخدام قوانين الجبر البولي لتحليل وتصميم الدوائر الرقمية. تتضمن الدورة أيضًا دراسة الدوائر المتكاملة وتصميم الدوائر المنطقية المتكاملة وتطبيقاتها في المجالات المختلفة."],
                ["عمارة الحاسب الالي", "مفاهيم تصميم وهندسة الحواسيب. يتعلم الطلاب حول تركيب وتنظيم مكونات الحاسب الآلي، بما في ذلك المعالج والذاكرة والتخزين ووحدات الإدخال والإخراج. يتعرفون على بنية الحاسب الآلي وكيفية تفاعل المكونات معًا لتنفيذ العمليات الحسابية وتخزين البيانات. تشمل المحتويات الأخرى للدورة مواضيع مثل مخططات الدوائر الداخلية، وتقنيات الاتصال بين المكونات، وتحليل أداء النظام، وتصميم الشبكات الداخلية للحواسيب."]

                ["تصميم النظر الرقمية", "دورة تعلم الطلاب مفاهيم تصميم النظم الرقمية. يتعلمون حول تصميم وتحليل الدوائر الرقمية والأنظمة المنطقية. يتضمن ذلك دراسة تصميم العتاد الرقمي والأدوات والتقنيات المستخدمة فيه، وكذلك تصميم الدوائر المنطقية المتكاملة والاستخدامات العملية لها في مجالات مثل المعالجات الرقمية والشبكات وأنظمة الاتصالات."]
                ["هندسة الشبكات", "دورة تعلم الطلاب مفاهيم هندسة الشبكات وتصميم وإدارة الشبكات المختلفة. يتعلمون حول تكنولوجيات الشبكات، بروتوكولات الاتصال، وتأمين الشبكات. يتعلمون أيضًا حول التخطيط والتصميم والتشغيل والصيانة للشبكات السلكية واللاسلكية."]
                ["رياضيات هندسية متقدمة", "دورة تعمق في مجال الرياضيات الهندسية المتقدمة. يتعلم الطلاب عن المفاهيم الرياضية المتقدمة المستخدمة في التصميم والتحليل الهندسي. يتضمن ذلك دراسة الأشكال الهندسية المتقدمة، والتحويلات الهندسية، والتفاضل والتكامل في البُعد العالي، والمعادلات التفاضلية العادية."]
                ["دوائر الكترونية", "دورة تعلم الطلاب عن مفاهيم وتصميم دوائر الكترونية. يتعلمون حول العناصر الأساسية للدوائر الإلكترونية وكيفية تجميعها وتشغيلها. يتضمن ذلك دراسة العناصر النشطة والمقاومات والمكثفات والملفات والبوابات المنطقية. يتعلم الطلاب أيضًا حول تصميم الدوائر الإلكترونية المبدئي وتحليلها باستخدام الأدوات والتقنيات المناسبة."]
                ["الاشارات والنظم"]
              ]}
            />}
          />
          <Route path="/se" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
          <Route path="/sec" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%A7%D9%84%D8%A3%D9%85%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D8%A3%D9%85%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
          <Route path="/ds" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
          <Route path="/ai" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
          <Route path="/hci" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%AA%D9%81%D8%A7%D8%B9%D9%84%20%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%20%D9%85%D8%B9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%AA%D9%81%D8%A7%D8%B9%D9%84%20%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%20%D9%85%D8%B9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 审稿专家数据
const experts = [
    "陈磊", "刘志远", "吕长江", "潘飞", "汤谷良", "王立彦", "谢志华", "许定波"
];

// 文章数据 - 从提供的Excel文件中提取
const articles = [
    { id: 1, title: "ESG驱动企业大气污染防治成本信息披露的内在机理与实施路径研究", authors: "李勇义 李思彤 李洪泽 王梦琪", institution: "河南省公路工程局集团有限公司 湖北工业大学经济与管理学院", expert: "陈磊" },
    { id: 2, title: "企业投资并购行为与经济周期的异质性研究", authors: "张健 乐树标", institution: "浙江物产环保能源股份有限公司", expert: "谢志华" },
    { id: 3, title: "复杂环境下的企业税务管理会计应用创新探究", authors: "杜国兵 余海霞 杜兆彦", institution: "襄阳汽车职业技术学院 襄阳万信和联合会计师事务所 中京国瑞（武汉）会计师事务所", expert: "吕长江" },
    { id: 4, title: "民营企业成长期管理会计体系探索之路", authors: "张春基", institution: "黄山亿利工贸集团有限公司", expert: "潘飞" },
    { id: 5, title: "基于COSO框架的公立医院数字化内部控制体系重构研究与实践", authors: "王怡然 姚蔚 孙凤文", institution: "大连医科大学附属第一医院", expert: "汤谷良" },
    { id: 6, title: "价值驱动下的烟草地市级财务共享中心构建与效能提升探究——以福建省烟草公司X市公司为例", authors: "任励 何璇", institution: "福建省烟草公司厦门市公司 厦门市烟草公司集美分公司", expert: "王立彦" },
    { id: 7, title: "基于价值链分析的库存管理效能提升的探索实践--以X市烟草公司为例", authors: "任励 何璇 洪雅君 石源 卢晓晖", institution: "福建省烟草公司厦门市公司", expert: "王立彦" },
    { id: 8, title: "管理会计数智化赋能企业价值创造探索 —以国有房企A公司为例", authors: "刘春燕", institution: "宁波市轨道交通集团有限公司", expert: "许定波" },
    { id: 9, title: "不动产租赁业务中的税收规划与风险防范", authors: "左雨佳", institution: "河北太行科创有限公司", expert: "谢志华" },
    { id: 10, title: "财务风险管理视角下公立医院内部控制优化思考", authors: "谢倩", institution: "南通大学附属医院", expert: "刘志远" },
    { id: 11, title: "财务共享模式下绩效考核数智化发展的实践探索研究", authors: "张志光 马亚刚", institution: "中核运维技术有限公司", expert: "许定波" },
    { id: 12, title: "城舵新航：复杂变局中城投公司的战略破茧与价值重生", authors: "宋翔", institution: "伊犁拓康房地产开发有限公司", expert: "潘飞" },
    { id: 13, title: "基于内部控制的医院运营管理实践", authors: "褚福建", institution: "巨野县人民医院", expert: "陈磊" },
    { id: 14, title: "基于RBRVS和DRG的精益化绩效管理", authors: "褚福建", institution: "巨野县人民医院", expert: "陈磊" },
    { id: 15, title: "动态价值地图与财务角色重塑的双向赋能机制解析——以A企业为例", authors: "陈学科 曹天翔 张盼", institution: "北方矿业有限责任公司 （中国兵器工业集团成员单位）", expert: "刘志远" },
    { id: 16, title: "动态能力视角下数字化转型的价值创造路径——基于Z公司的案例研究", authors: "王录伟 张清悦", institution: "四川工商学院 嘉应学院", expert: "许定波" },
    { id: 17, title: "复杂环境下餐饮行业以管理会计为工具推动业财融合实现管理模式的创新", authors: "张敬勇", institution: "执首企业管理咨询（天津）有限公司", expert: "吕长江" },
    { id: 18, title: "复杂环境下的'灯塔工厂'制造业企业数字化转型研究-基于梅特勒托利多的案例分析", authors: "盛丰", institution: "江苏道金智能制造科技股份有限公司", expert: "汤谷良" },
    { id: 19, title: "复杂环境下的企业战略与管理创新——基于管理会计视角的实践与理论探索", authors: "吴毅青", institution: "郑州市职业病防治院", expert: "许定波" },
    { id: 20, title: "公立医院数据资产管理体系框架建设研究", authors: "吴涛", institution: "南通大学附属医院", expert: "谢志华" },
    { id: 21, title: "供应链金融对核心企业绩效的影响——以厦门象屿为例", authors: "黄晓红 刘晨宇", institution: "长春大学", expert: "刘志远" },
    { id: 22, title: "集团公司财务管理能力评价应用", authors: "李静", institution: "北京北大纵横管理咨询有限责任公司", expert: "吕长江" },
    { id: 23, title: "我国管理会计深化应用的存在问题与对策研究", authors: "张钟元", institution: "天津赛森科技集团有限公司", expert: "潘飞" },
    { id: 24, title: "基于业财融合的成本管控体系构建与应用", authors: "许宇博", institution: "内蒙古一机集团大地石油机械有限责任公司", expert: "汤谷良" },
    { id: 25, title: "基于'穿透式'监管体系下的审计效能提升路径探索", authors: "苏爱国 刘伟琼 曹颖 黎婉裕 张凌 李汉柱", institution: "中国联合网络通信有限公司广东省分公司", expert: "王立彦" },
    { id: 26, title: "基于多维度指标提升医疗机构床位运营效率的综合分析", authors: "胥佳", institution: "成都市金牛区人民医院", expert: "许定波" },
    { id: 27, title: "基于数据包络分析的医院临床科室效率研究", authors: "张煦利", institution: "南通大学附属医院", expert: "谢志华" },
    { id: 28, title: "军工科研院所数据资产入表研究", authors: "杨博", institution: "中国兵器工业试验测试研究院", expert: "陈磊" },
    { id: 29, title: "逆全球化背景下家族企业国际创业与创新韧性的关系研究", authors: "高雯 代吉林 伍兆祥", institution: "铜陵学院", expert: "刘志远" },
    { id: 30, title: "浅谈管理会计与财务会计融合的应用", authors: "万立波", institution: "中交一公局西北工程有限公司", expert: "吕长江" },
    { id: 31, title: "中交一公局西北工程有限公司成本管控体系应用实践", authors: "万立波", institution: "中交一公局西北工程有限公司", expert: "吕长江" },
    { id: 32, title: "企业财务合规管理体系的构建----基于内部控制理论视角", authors: "李春燕", institution: "南京理工科技化工有限责任公司", expert: "潘飞" },
    { id: 33, title: "基于全面预算牵引的一体化运营管理体系研究与构建——庆阳化工价值创造驱动的脱困实施路径", authors: "辽宁庆阳特种化工有限公司课题组", institution: "辽宁庆阳特种化工有限公司", expert: "汤谷良" },
    { id: 34, title: "人工智能驱动智能会计模型研究与实现技术", authors: "冯茁 康鹏 冯典", institution: "香港城市大学商学院 辽宁大学新华国际商学院 沈阳药科大学药学院", expert: "王立彦" },
    { id: 35, title: "如何以管理会计方法保持企业的战略定力？——以制造企业实施转型升级为例", authors: "沈悦 张敬勇 王欣", institution: "北京科技大学天津学院 执首咨询 捷温汽车系统（中国）有限公司", expert: "许定波" },
    { id: 36, title: "数智赋能下的财务管理创新实践与启示──以昆明铁路局为例", authors: "杨卫华", institution: "中国铁路昆局集团公司财务共享中心", expert: "谢志华" },
    { id: 37, title: "数智技术对创新医院管理会计应用的思考", authors: "周进", institution: "上海申康医院发展中心委派上海市同济医院", expert: "陈磊" },
    { id: 38, title: "数字化背景下高校财务管理创新——以X高校为例", authors: "王炜 谢萍 胡敏 李缃珍", institution: "浙大城市学院 计划财务处", expert: "刘志远" },
    { id: 39, title: "数字化转型背景下医疗器械企业的战略重构与管理创新路径探析", authors: "成艳华", institution: "南通大学附属医院", expert: "潘飞" },
    { id: 40, title: "私域流量在公立医院体检中心客户关系管理中的应用研究", authors: "耿烊烊", institution: "南通大学附属医院", expert: "汤谷良" },
    { id: 41, title: "公立医院资金反舞弊风险的防控应对措施", authors: "德吉卓嘎", institution: "日喀则市人民医院", expert: "王立彦" },
    { id: 42, title: "现代管理会计在公立医院风险管理的创新研究", authors: "王菁", institution: "南通大学附属医院", expert: "许定波" },
    { id: 43, title: "业财融合赋能全面预算管控的创新实践与思考", authors: "白晓燕 张沛 赵江梅 陈畅", institution: "北方光电集团有限公司", expert: "谢志华" },
    { id: 44, title: "业财深度融合驱动中储粮直属企业储备粮轮换业务价值提升的路径探析", authors: "翟红卫", institution: "中央储备粮巴彦淖尔直属库有限公司", expert: "陈磊" },
    { id: 45, title: "公立医院管理会计体系建设影响因素研究—基于人工智能大数据模型预测", authors: "张柴", institution: "大连医科大学附属第二医院", expert: "刘志远" },
    { id: 46, title: "政府会计制度视角下高校成本核算应用研究", authors: "任元明", institution: "西南大学财务部（采购与招投标管理中心）", expert: "吕长江" },
    { id: 47, title: "智能监管在医院价格管理中的应用", authors: "朱建霞 赵杨洋 范静嘉", institution: "南通市第四人民医院", expert: "潘飞" },
    { id: 48, title: "重构中小城商行竞争力：复杂环境下战略聚焦与管理精细化创新的互动效应", authors: "李想", institution: "北京大学第三医院秦皇岛医院", expert: "汤谷良" },
    { id: 49, title: "足球俱乐部运动员人力资源成本核算初探", authors: "迟铮 耿玮", institution: "大连外国语大学 东北财经大学", expert: "王立彦" }
];

// 存储评价结果
let ratings = {};

// 初始化评价结果
function initializeRatings() {
    ratings = {};
    articles.forEach(article => {
        ratings[article.id] = {
            expert: article.expert,
            rating: null // null表示未评价
        };
    });
    
    // 从本地存储加载已有的评价结果
    const savedRatings = localStorage.getItem('expertRatings');
    if (savedRatings) {
        const parsedRatings = JSON.parse(savedRatings);
        Object.assign(ratings, parsedRatings);
    }
}

// 保存评价结果到本地存储
function saveRatings() {
    localStorage.setItem('expertRatings', JSON.stringify(ratings));
}

// 选择专家
document.querySelectorAll('.expert-btn').forEach(button => {
    button.addEventListener('click', function() {
        const expert = this.getAttribute('data-expert');
        document.getElementById('expert-name-display').textContent = `${expert} 专家的审稿文章`;
        document.getElementById('expert-selection').style.display = 'none';
        document.getElementById('articles-section').style.display = 'block';
        document.getElementById('results-section').classList.remove('active');
        
        // 显示该专家的文章
        displayArticlesForExpert(expert);
    });
});

// 显示专家的文章
function displayArticlesForExpert(expert) {
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = '';
    
    const expertArticles = articles.filter(article => article.expert === expert);
    
    expertArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-item';
        articleDiv.setAttribute('data-id', article.id);
        
        const status = ratings[article.id]?.rating;
        let statusBadge = '';
        if (status) {
            const statusClasses = {
                'recommended': 'status-recommended',
                'magazine': 'status-magazine',
                'not-recommended': 'status-not-recommended'
            };
            const statusTexts = {
                'recommended': '推荐获奖',
                'magazine': '杂志论文备选',
                'not-recommended': '均不推荐'
            };
            statusBadge = `<span class="status-badge ${statusClasses[status]}">${statusTexts[status]}</span>`;
        } else {
            statusBadge = `<span class="status-badge status-pending">待评价</span>`;
        }
        
        articleDiv.innerHTML = `
            <div class="article-title">${article.title} ${statusBadge}</div>
            <div class="article-authors">作者：${article.authors}</div>
            <div class="article-institution">单位：${article.institution}</div>
            <div class="rating-options">
                <div class="rating-option">
                    <input type="radio" id="recommended-${article.id}" name="rating-${article.id}" value="recommended" ${status === 'recommended' ? 'checked' : ''}>
                    <label for="recommended-${article.id}">推荐获奖</label>
                </div>
                <div class="rating-option">
                    <input type="radio" id="magazine-${article.id}" name="rating-${article.id}" value="magazine" ${status === 'magazine' ? 'checked' : ''}>
                    <label for="magazine-${article.id}">杂志论文备选</label>
                </div>
                <div class="rating-option">
                    <input type="radio" id="not-recommended-${article.id}" name="rating-${article.id}" value="not-recommended" ${status === 'not-recommended' ? 'checked' : ''}>
                    <label for="not-recommended-${article.id}">均不推荐</label>
                </div>
            </div>
        `;
        
        articlesList.appendChild(articleDiv);
        
        // 添加事件监听器
        const radioButtons = articleDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                ratings[article.id].rating = this.value;
                saveRatings();
                updateProgress(expert);
            });
        });
    });
    
    updateProgress(expert);
}

// 更新进度条
function updateProgress(expert) {
    const expertArticles = articles.filter(article => article.expert === expert);
    const ratedArticles = expertArticles.filter(article => ratings[article.id]?.rating !== null);
    const progress = (ratedArticles.length / expertArticles.length) * 100;
    
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${ratedArticles.length}/${expertArticles.length} 已完成`;
}

// 提交评价
document.getElementById('submit-ratings').addEventListener('click', function() {
    document.getElementById('articles-section').style.display = 'none';
    document.getElementById('results-section').classList.add('active');
    displayResults();
});

// 显示结果统计
function displayResults() {
    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';
    
    const recommendedArticlesList = document.getElementById('recommended-articles-list');
    const magazineArticlesList = document.getElementById('magazine-articles-list');
    
    recommendedArticlesList.innerHTML = '';
    magazineArticlesList.innerHTML = '';
    
    const expertStats = {};
    
    // 初始化专家统计
    experts.forEach(expert => {
        expertStats[expert] = {
            recommended: 0,
            magazine: 0,
            notRecommended: 0,
            pending: 0
        };
    });
    
    // 统计每个专家的评价结果
    articles.forEach(article => {
        const rating = ratings[article.id]?.rating;
        if (rating) {
            expertStats[article.expert][rating]++;
            
            // 添加到相应的文章列表
            if (rating === 'recommended') {
                const articleItem = document.createElement('div');
                articleItem.className = 'article-result-item recommended';
                articleItem.innerHTML = `
                    <div class="article-result-title">${article.title}</div>
                    <div class="article-result-meta">作者：${article.authors} | 单位：${article.institution} | 审稿专家：${article.expert}</div>
                `;
                recommendedArticlesList.appendChild(articleItem);
            } else if (rating === 'magazine') {
                const articleItem = document.createElement('div');
                articleItem.className = 'article-result-item magazine';
                articleItem.innerHTML = `
                    <div class="article-result-title">${article.title}</div>
                    <div class="article-result-meta">作者：${article.authors} | 单位：${article.institution} | 审稿专家：${article.expert}</div>
                `;
                magazineArticlesList.appendChild(articleItem);
            }
        } else {
            expertStats[article.expert].pending++;
        }
    });
    
    // 生成结果表格
    experts.forEach(expert => {
        const stats = expertStats[expert];
        const total = stats.recommended + stats.magazine + stats.notRecommended + stats.pending;
        const completed = total - stats.pending;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expert}</td>
            <td>${stats.recommended}</td>
            <td>${stats.magazine}</td>
            <td>${stats.notRecommended}</td>
            <td>${stats.pending}</td>
            <td>${completionRate}%</td>
        `;
        resultsBody.appendChild(row);
    });
}

// 查阅结果
document.getElementById('view-results-btn').addEventListener('click', function() {
    document.getElementById('expert-selection').style.display = 'none';
    document.getElementById('articles-section').style.display = 'none';
    document.getElementById('results-section').classList.add('active');
    displayResults();
});

// 导出结果
document.getElementById('export-btn').addEventListener('click', exportResults);
document.getElementById('export-results-btn').addEventListener('click', exportResults);

// 导出结果功能
function exportResults() {
    // 创建CSV内容
    let csvContent = "文章标题,作者,单位,审稿专家,评价结果\n";
    
    articles.forEach(article => {
        const rating = ratings[article.id]?.rating;
        let ratingText = "未评价";
        if (rating === 'recommended') ratingText = "推荐获奖";
        else if (rating === 'magazine') ratingText = "杂志论文备选";
        else if (rating === 'not-recommended') ratingText = "均不推荐";
        
        csvContent += `"${article.title}","${article.authors}","${article.institution}","${article.expert}","${ratingText}"\n`;
    });
    
    // 创建下载链接
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "管理会计论坛征文审稿结果.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 返回审阅
document.getElementById('back-to-review').addEventListener('click', function() {
    document.getElementById('results-section').classList.remove('active');
    document.getElementById('expert-selection').style.display = 'block';
});

// 初始化
initializeRatings();
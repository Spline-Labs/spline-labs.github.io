export const languages = {
  en: 'EN',
  zh: '中文',
};

export const defaultLang = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      research: 'Research',
      publications: 'Publications',
      resources: 'Resources',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Spline-Labs',
        subtitle: 'Advancing Spline Theory for Modern Engineering',
        description: 'A leading research institute dedicated to the study of B-spline, NURBS, and subdivision surface theories.',
      },
      about: {
        title: 'About Us',
        description: 'Spline-Labs has been at the forefront of computational geometry research for over two decades. Our team of experts specializes in B-spline, NURBS, subdivision curves, and their applications in modern engineering.',
      },
      features: {
        title: 'Why Choose Us',
        items: [
          {
            title: 'Theoretical Innovation',
            description: 'Pushing the boundaries of spline mathematics with novel algorithms and formulations.',
          },
          {
            title: 'Algorithm Optimization',
            description: 'Developing efficient computational methods for curve and surface modeling.',
          },
          {
            title: 'Industrial Applications',
            description: 'Bridging theory and practice with real-world engineering solutions.',
          },
          {
            title: 'Open Collaboration',
            description: 'Fostering partnerships across academia and industry.',
          },
        ],
      },
      research: {
        title: 'Research Areas',
        viewAll: 'View All Research',
      },
      publications: {
        title: 'Recent Publications',
        viewAll: 'View All Publications',
      },
    },
    about: {
      title: 'About Spline-Labs',
      mission: {
        title: 'Our Mission',
        description: 'To advance the theoretical foundations of spline mathematics and translate our research into practical applications that benefit industry and society.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To become a global center of excellence for computational geometry and spline theory research.',
      },
      history: {
        title: 'Our History',
        items: [
          { year: '2003', event: 'Spline-Labs founded' },
          { year: '2008', event: 'First major research grant received' },
          { year: '2015', event: 'International collaboration program launched' },
          { year: '2020', event: 'Open source initiative started' },
          { year: '2024', event: 'New research center opened' },
        ],
      },
      team: {
        title: 'Our Team',
      },
    },
    research: {
      title: 'Research Areas',
      subtitle: 'Exploring the frontiers of computational geometry',
      areas: [
        {
          id: 'bspline',
          title: 'B-Spline Theory',
          description: 'Fundamental research on B-spline basis functions, knot vectors, and the De Boor algorithm. We explore local support properties, smoothness conditions, and efficient evaluation methods.',
          keywords: ['Basis Functions', 'Knot Vectors', 'De Boor Algorithm', 'Local Control'],
        },
        {
          id: 'nurbs',
          title: 'NURBS Modeling',
          description: 'Non-Uniform Rational B-splines provide flexibility in representing conic sections and free-form curves. Our research covers weight optimization, curve/surface construction, and industrial applications.',
          keywords: ['Weight Control', 'Rational Curves', 'Surface Modeling', 'CAD/CAM'],
        },
        {
          id: 'subdivision',
          title: 'Subdivision Surfaces',
          description: 'Study of subdivision algorithms including Catmull-Clark and Doo-Sabin methods. We investigate convergence properties, smoothness analysis, and practical implementation techniques.',
          keywords: ['Catmull-Clark', 'Doo-Sabin', 'Limit Surfaces', 'Mesh Refinement'],
        },
        {
          id: 'iga',
          title: 'Isogeometric Analysis',
          description: 'Bridging CAD and CAE through NURBS-based finite element methods. Our work enables seamless integration of geometric design and numerical simulation.',
          keywords: ['FEM', 'CAD/CAE Integration', 'PDE Solutions', 'Shape Optimization'],
        },
        {
          id: 'fitting',
          title: 'Curve & Surface Fitting',
          description: 'Developing algorithms for approximating scattered data with smooth spline curves and surfaces. We focus on least-squares methods and parameter optimization.',
          keywords: ['Least Squares', 'Data Approximation', 'Parameter Optimization', 'Reconstruction'],
        },
        {
          id: 'applications',
          title: 'Spline Applications',
          description: 'Applying spline theory to real-world problems in CNC machining, 3D printing, automotive design, computer graphics, and animation.',
          keywords: ['CNC Machining', '3D Printing', 'Automotive Design', 'Computer Graphics'],
        },
      ],
    },
    publications: {
      title: 'Publications',
      subtitle: 'Sharing our research findings',
      categories: [
        { id: '2024', title: '2024-2025' },
        { id: '2022', title: '2022-2023' },
        { id: '2020', title: '2020-2021' },
      ],
      papers: [
        {
          title: 'Optimized dual NURBS curve interpolation for high-accuracy five-axis CNC path planning',
          authors: 'Yi Xu, Hairi Mohd Zaman, Feng Zhou',
          journal: 'Scientific Reports',
          year: '2025',
          abstract: 'This study presents a dual NURBS curve interpolation algorithm specifically designed for five-axis synchronized motion.',
        },
        {
          title: 'Geometric modelling based on non-classical NURBS for 3D printing',
          authors: 'Ronald M. Martinod',
          journal: 'International Journal on Interactive Design and Manufacturing',
          year: '2025',
          abstract: 'A novel method for rapid and flexible design of complex and nature-inspired surface textures.',
        },
        {
          title: 'Evaluation algorithms for parametric curves and surfaces',
          authors: 'Lanlan Yan',
          journal: 'Mathematics',
          year: '2025',
          abstract: 'Extends linear-complexity Bézier evaluation algorithm to all parametric curves and surfaces.',
        },
        {
          title: 'B-spline curve theory: An overview and applications in real life',
          authors: 'Shahid Hasan, Md. Nur Alam, Md. Fayz-Al-Asad, Noor Muhammad',
          journal: 'Nonlinear Engineering',
          year: '2024',
          abstract: 'A comprehensive overview of B-spline curves, their essential properties, and practical implementations.',
        },
      ],
    },
    resources: {
      title: 'Resources',
      subtitle: 'Tools and materials for researchers',
      sections: [
        {
          id: 'opensource',
          title: 'Open Source',
          items: [
            { name: 'SplineKit', description: 'A lightweight B-spline library for JavaScript', link: '#' },
            { name: 'NURBS-Python', description: 'Pure Python NURBS library', link: '#' },
            { name: 'IGAFEM', description: 'Isogeometric finite element toolbox', link: '#' },
          ],
        },
        {
          id: 'tutorials',
          title: 'Tutorials',
          items: [
            { name: 'Introduction to B-Splines', description: 'Fundamentals of B-spline theory', link: '#' },
            { name: 'NURBS Curve Design', description: 'Practical NURBS modeling guide', link: '#' },
            { name: 'Subdivision Surfaces', description: 'Theory and implementation', link: '#' },
          ],
        },
        {
          id: 'datasets',
          title: 'Datasets',
          items: [
            { name: 'Spline Curve Database', description: 'Test curves with known properties', link: '#' },
            { name: 'Surface Mesh Collection', description: 'Various subdivision surfaces', link: '#' },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      join: {
        title: 'Join Our Team',
        positions: [
          { title: 'Postdoctoral Researcher', type: 'Full-time', description: 'PhD in Mathematics, Computer Science, or related field' },
          { title: 'Research Assistant', type: 'Full-time', description: 'Master\'s degree in computational geometry' },
          { title: 'Visiting Scholar', type: 'Part-time', description: 'Academic researchers and industry professionals' },
        ],
      },
      collaborate: {
        title: 'Collaboration',
        description: 'We welcome partnerships with academic institutions and industry partners.',
      },
      info: {
        title: 'Contact Information',
        email: 'contact@spline-labs.org',
        address: '123 Research Avenue, Science Park, ST 12345',
      },
    },
    footer: {
      description: 'Advancing spline theory for modern engineering',
      copyright: '© 2025 Spline-Labs. All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      research: '研究',
      publications: '成果',
      resources: '资源',
      contact: '联系',
    },
    home: {
      hero: {
        title: 'Spline-Labs',
        subtitle: '推进样条理论，赋能现代工程',
        description: '致力于B样条、NURBS、细分曲面理论研究的领先研究机构。',
      },
      about: {
        title: '关于我们',
        description: 'Spline-Labs 二十年来始终处于计算几何研究的前沿。我们的专家团队专注于B样条、NURBS、细分曲线及其在现代工程中的应用。',
      },
      features: {
        title: '核心优势',
        items: [
          {
            title: '理论创新',
            description: '以新颖的算法和公式推动样条数学的边界。',
          },
          {
            title: '算法优化',
            description: '开发高效的曲线曲面建模计算方法。',
          },
          {
            title: '工业应用',
            description: '将理论与实际工程解决方案相结合。',
          },
          {
            title: '开放合作',
            description: '促进学术界与工业界的合作。',
          },
        ],
      },
      research: {
        title: '研究方向',
        viewAll: '查看全部',
      },
      publications: {
        title: '最新成果',
        viewAll: '查看全部',
      },
    },
    about: {
      title: '关于 Spline-Labs',
      mission: {
        title: '使命',
        description: '推进样条数学的理论基础，将研究成果转化为造福工业和社会的实际应用。',
      },
      vision: {
        title: '愿景',
        description: '成为计算几何和样条理论研究的全球卓越中心。',
      },
      history: {
        title: '发展历程',
        items: [
          { year: '2003', event: 'Spline-Labs 成立' },
          { year: '2008', event: '获得首个重大研究基金' },
          { year: '2015', event: '启动国际合作计划' },
          { year: '2020', event: '开源项目启动' },
          { year: '2024', event: '新研究中心开业' },
        ],
      },
      team: {
        title: '团队成员',
      },
    },
    research: {
      title: '研究方向',
      subtitle: '探索计算几何的前沿',
      areas: [
        {
          id: 'bspline',
          title: 'B样条理论',
          description: 'B样条基函数、节点向量和De Boor算法的基础研究。探索局部支撑性、光滑条件和高效计算方法。',
          keywords: ['基函数', '节点向量', 'De Boor算法', '局部控制'],
        },
        {
          id: 'nurbs',
          title: 'NURBS建模',
          description: '非均匀有理B样条在表示圆锥曲线和自由形式曲线方面具有灵活性。研究涵盖权重优化、曲线/曲面构造和工业应用。',
          keywords: ['权重控制', '有理曲线', '曲面建模', 'CAD/CAM'],
        },
        {
          id: 'subdivision',
          title: '细分曲面',
          description: '细分算法研究，包括Catmull-Clark和Doo-Sabin方法。探讨收敛性、光滑性分析和实际实现技术。',
          keywords: ['Catmull-Clark', 'Doo-Sabin', '极限曲面', '网格细化'],
        },
        {
          id: 'iga',
          title: '等几何分析',
          description: '通过基于NURBS的有限元方法连接CAD和CAE。我们的工作实现几何设计与数值模拟的无缝集成。',
          keywords: ['有限元', 'CAD/CAE集成', 'PDE求解', '形状优化'],
        },
        {
          id: 'fitting',
          title: '曲线曲面拟合',
          description: '开发用光滑样条曲线和曲面逼近散乱数据的算法。专注于最小二乘方法和参数优化。',
          keywords: ['最小二乘', '数据逼近', '参数优化', '重构'],
        },
        {
          id: 'applications',
          title: '样条应用',
          description: '将样条理论应用于数控加工、3D打印、汽车设计、计算机图形学和动画等实际问题。',
          keywords: ['数控加工', '3D打印', '汽车设计', '计算机图形学'],
        },
      ],
    },
    publications: {
      title: '研究成果',
      subtitle: '分享我们的研究发现',
      categories: [
        { id: '2024', title: '2024-2025' },
        { id: '2022', title: '2022-2023' },
        { id: '2020', title: '2020-2021' },
      ],
      papers: [
        {
          title: '用于高精度五轴数控路径规划的优化双NURBS曲线插值',
          authors: 'Yi Xu, Hairi Mohd Zaman, Feng Zhou',
          journal: 'Scientific Reports',
          year: '2025',
          abstract: '提出了一种专门用于五轴同步运动的 dual NURBS 曲线插值算法。',
        },
        {
          title: '基于非经典NURBS的几何建模及其在3D打印中的应用',
          authors: 'Ronald M. Martinod',
          journal: 'International Journal on Interactive Design and Manufacturing',
          year: '2025',
          abstract: '一种用于快速灵活设计复杂自然灵感纹理表面的新方法。',
        },
        {
          title: '参数曲线曲面的求值算法',
          authors: 'Lanlan Yan',
          journal: 'Mathematics',
          year: '2025',
          abstract: '将线性复杂度Bezier求值算法扩展到所有参数曲线和曲面。',
        },
        {
          title: 'B样条曲线理论概述及实际应用',
          authors: 'Shahid Hasan, Md. Nur Alam, Md. Fayz-Al-Asad, Noor Muhammad',
          journal: 'Nonlinear Engineering',
          year: '2024',
          abstract: '全面概述B样条曲线、基本属性和实际应用。',
        },
      ],
    },
    resources: {
      title: '资源中心',
      subtitle: '为研究人员提供的工具和资料',
      sections: [
        {
          id: 'opensource',
          title: '开源项目',
          items: [
            { name: 'SplineKit', description: '轻量级JavaScript B样条库', link: '#' },
            { name: 'NURBS-Python', description: '纯Python NURBS库', link: '#' },
            { name: 'IGAFEM', description: '等几何有限元工具箱', link: '#' },
          ],
        },
        {
          id: 'tutorials',
          title: '教程',
          items: [
            { name: 'B样条入门', description: 'B样条理论基础', link: '#' },
            { name: 'NURBS曲线设计', description: '实用NURBS建模指南', link: '#' },
            { name: '细分曲面', description: '理论与实现', link: '#' },
          ],
        },
        {
          id: 'datasets',
          title: '数据集',
          items: [
            { name: '样条曲线数据库', description: '具有已知属性的测试曲线', link: '#' },
            { name: '曲面网格集合', description: '各种细分曲面', link: '#' },
          ],
        },
      ],
    },
    contact: {
      title: '联系我们',
      subtitle: '与我们取得联系',
      join: {
        title: '加入我们',
        positions: [
          { title: '博士后研究人员', type: '全职', description: '数学、计算机科学或相关专业博士' },
          { title: '研究助理', type: '全职', description: '计算几何硕士学位' },
          { title: '访问学者', type: '兼职', description: '学术研究人员和行业专业人士' },
        ],
      },
      collaborate: {
        title: '合作',
        description: '我们欢迎与学术机构和行业伙伴的合作。',
      },
      info: {
        title: '联系信息',
        email: 'contact@spline-labs.org',
        address: '123 研究大道，科学园，ST 12345',
      },
    },
    footer: {
      description: '推进样条理论，赋能现代工程',
      copyright: '© 2025 Spline-Labs. 保留所有权利。',
    },
  },
};

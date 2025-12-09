import { ChapterDetail } from '../types';

export const reportContent: Record<string, ChapterDetail> = {
  cost: {
    id: 'cost',
    title: '第一章：降维打击的发射霸权',
    color: 'bg-blue-100',
    sections: [
      {
        heading: '核心逻辑：垂直整合',
        text: 'SpaceX 是全球唯一一家同时掌握顶尖火箭制造发射能力和顶尖卫星制造能力的公司。这种垂直整合带来了巨大的成本优势。Starlink 就像是 SpaceX 火箭的“填充物”，利用 Falcon 9 的余量进行发射。',
        bullets: [
          '整流罩复用：每次节省 600 万美元。',
          '一级火箭复用：Falcon 9 已实现 20+ 次复用，边际发射成本极低。',
          '自有产能：Starlink 卫星工厂日产 40-50 颗卫星，规模效应显著。'
        ]
      },
      {
        heading: 'Starship：下一代大杀器',
        text: '如果说 Falcon 9 改变了游戏规则，Starship 将彻底终结比赛。Starship 目标将发射成本降低至 $100/kg 甚至更低。',
        bullets: [
          '运力提升：单次可发射 100+ 颗 V2 卫星（V2卫星更重、性能更强）。',
          '快速周转：完全可回收设计，目标实现类似飞机的周转率。',
          '部署效率：无需复杂的入轨机动，直接大批量部署。'
        ]
      }
    ]
  },
  business: {
    id: 'business',
    title: '第二章：商业模式的进化',
    color: 'bg-purple-100',
    sections: [
      {
        heading: '终端成本与盈利拐点',
        text: 'Starlink 早期面临巨大的终端补贴压力（卖一台亏一台）。但随着产量提升和芯片整合，终端成本已从 $3000 降至 $600 以下，接近盈亏平衡点。',
        bullets: [
          '标准版 Dish：面向普通消费者，已实现正向现金流。',
          '高性能版：面向商业/海事，高溢价，高利润。'
        ]
      },
      {
        heading: 'Direct-to-Cell (直连手机)',
        text: '这是 Starlink 真正的万亿级市场。通过与 T-Mobile 等运营商合作，利用存量手机直接连接卫星，无需购买专用终端。',
        bullets: [
          '技术难点：手机天线功率极低，需要在卫星端通过巨大的相控阵天线来“听见”手机信号。',
          '商业价值：消灭全球信号死角，从“卖宽带”转向“卖漫游服务”。'
        ]
      }
    ]
  },
  tech: {
    id: 'tech',
    title: '第三章：技术壁垒解析',
    color: 'bg-indigo-100',
    sections: [
      {
        heading: '星间激光链路 (Optical Intersatellite Links)',
        text: 'Starlink V1.5 及以上版本标配激光链路。这使得卫星之间可以直接通信，数据不需要在地面站跳转。',
        bullets: [
          '光速优势：光在真空中传播速度比在光纤（玻璃）中快约 40%，实现伦敦到纽约比光纤更低的延迟。',
          '极地覆盖：在没有地面站的南北极、海洋中心，依然可以通过邻近卫星回传数据。'
        ]
      },
      {
        heading: '氩气霍尔推力器',
        text: 'SpaceX 研发了使用氩气（Argon）作为工质的霍尔推力器。氩气比传统的氪气（Krypton）或氙气（Xenon）便宜极多。',
        bullets: [
          '成本：氩气价格几乎可以忽略不计。',
          '推力：虽然比冲略低，但对于低轨卫星变轨已经足够。'
        ]
      }
    ]
  },
  investment: {
    id: 'investment',
    title: '第四章：中国版 Starlink 投资地图',
    color: 'bg-red-50',
    sections: [
      {
        heading: 'G60 千帆星座与 GW 国网',
        text: '中国已申报 1.3 万颗（GW）和 1.2 万颗（G60）低轨卫星规划。2024-2025 年是发射密集期，产业链进入业绩兑现期。',
        bullets: [
          '上海垣信 (G60)：商业化推进较快，已开始批量发射。',
          '中国星网 (GW)：国家队，统筹规划，后续潜力巨大。'
        ]
      },
      {
        heading: '核心受益环节',
        text: '按照价值量拆分，卫星制造中最大的成本在于通信载荷。',
        bullets: [
          'T/R 组件：相控阵天线的核心，需求量随天线阵列数指数级增长。',
          'FPGA/SoC：卫星星上处理芯片，要求抗辐照能力。',
          '激光终端：星间链路的关键设备，国内多家上市公司已突破技术瓶颈。',
          '姿轨控系统：霍尔推力器及其供电单元。'
        ]
      }
    ]
  }
};
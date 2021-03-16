'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          to_do_id: '10001',
          subject: '晨會',
          reserved_time: '2020-10-24 09:00',
          modified_time: '2020-10-24 09:00',
          brief: '午餐負責人',
          level: 3,
          author: '傑夫',
          content: 'AA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to_do_id: '10002',
          subject: '下午茶',
          reserved_time: '2020-10-24 12:30',
          modified_time: '2020-10-24 12:30',
          brief: '50嵐 VS 可不可熟成',
          level: 8,
          author: 'Leo',
          content: 'BB',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to_do_id: '10003',
          subject: '客戶拜訪',
          reserved_time: '2020-10-24 16:20',
          modified_time: '2020-10-24 16:20',
          brief: '陽明山上的阿婷來訪',
          level: 7,
          author: '小魚',
          content: 'CC',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to_do_id: '10004',
          subject: '晨會',
          reserved_time: '2020-10-25 09:00',
          modified_time: '2020-10-25 09:00',
          brief: '午餐自行處理',
          level: 3,
          author: '傑夫',
          content: 'DD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to_do_id: '10005',
          subject: '下午茶',
          reserved_time: '2020-10-25 13:00',
          modified_time: '2020-10-25 13:00',
          brief: '京盛宇限定',
          level: 5,
          author: 'Leo',
          content: 'QQ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

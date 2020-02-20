import db from '../../sequelize/models';

const { Service } = db;

/**
 * @author Diane Mahoro
 * @class Services
 * @description this class performs the whole service
 */
class Services {
  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async createService(req, res) {
    const { title, description, image } = req.body;
    const data = {
      title, description, image
    };
    const response = await Service.findAll({
      where: {
        title
      }

    });
    if (!response[0]) {
      const newService = await Service.create({
        title: data.title,
        description: data.description,
        image: data.image
      });
      return res.status(201).json({
        data: newService,
        message: 'Service created successfully'
      });
    }
  }
}
export default Services;

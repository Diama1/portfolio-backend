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

  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async getAllServices(req, res) {
    const allServices = await Service.findAll();
    if (!allServices[0]) return res.status(200).send({ message: 'Whoops! No Service found!' });
    res.status(200).send({
      services: allServices
    });
  }

  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async updateService(req, res) {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const data = {
      title, description, image
    };

    const response = await Service.findAll({
      where: { id }
    });
    if (response) {
      await Service.update(
        { title: data.title, description: data.description, image: data.image },
        { where: { id }, logging: false }
      );
      res.status(200).json({
        NewService: data,
        message: 'updated',
      });
    }
  }

  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async deleteService(req, res) {
    const { id } = req.params;

    await Service.destroy({
      where: {
        id
      }
    });
    res.status(200).json({
      message: 'the service has been deleted successfully'
    });
  }
}
export default Services;

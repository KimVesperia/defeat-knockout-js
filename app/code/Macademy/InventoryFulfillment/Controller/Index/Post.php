<?php declare(strict_types=1);
/**
 * @author Kim Phung - kimphung@buro210.nl
 * @date 02-12-2023
 * @category BURO210
 * @package Macademy_InventoryFulfillment
 * @copyright Copyright © BURO210 (www.buro210.nl)
 */

namespace Macademy\InventoryFulfillment\Controller\Index;

/**
 * Class Post
 *
 * @package Macademy\InventoryFulfillment\Controller\Index\Post
 */
class Post implements \Magento\Framework\App\Action\HttpPostActionInterface
{
    /**
     * JsonFactory constructor.
     *
     * @param \Magento\Framework\Controller\Result\JsonFactory $jsonFactory,
     */
    public function __construct(
        private \Magento\Framework\Controller\Result\JsonFactory $jsonFactory
    ) {}

    /**
     * Execute HttpPostActionInterface
     *
     * @return null|\Magento\Framework\Controller\Result\Json
     */
    public function execute(): ?\Magento\Framework\Controller\Result\Json
    {
        $json = $this->jsonFactory->create();
        
        return $json->setData(['success' => true]);
    }
}

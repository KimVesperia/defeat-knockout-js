<?php declare(strict_types=1);
/**
 * @author Kim Phung - kimphung@buro210.nl
 * @date 03-07-2023
 * @category BURO210
 * @package Macademy_InventoryFulfillment
 * @copyright Copyright © BURO210 (www.buro210.nl)
 */

namespace Macademy\InventoryFulfillment\Controller\Index;

/**
 * Class Index
 *
 * @package Macademy\InventoryFulfillment\Controller\Index\Index
 */
class Index implements \Magento\Framework\App\Action\HttpGetActionInterface
{
    /**
     * Index constructor.
     *
     * @param \Magento\Framework\View\Result\PageFactory $pageFactory
     */
    public function __construct(
        private \Magento\Framework\View\Result\PageFactory $pageFactory
    ) {
        
    }

    /**
     * Execute index
     *
     * @return null|\Magento\Framework\View\Result\Page
     */
    public function execute(): ?\Magento\Framework\View\Result\Page
    {
        $page = $this->pageFactory->create();
        $page->getConfig()->getTitle()->set(__('Shipping Plan'));

        return $page;
    }
}

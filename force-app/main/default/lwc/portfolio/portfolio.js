import { LightningElement,wire,api } from 'lwc';
import pictures from '@salesforce/resourceUrl/Nazirpic'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import { getRecord } from "lightning/uiRecordApi";
import PORTFOLIO_OBJECT from '@salesforce/schema/Portfolio__c';
// import fullname from '@salesforce/schema/Portfolio__c.FullName__c'
// import desg from '@salesforce/schema/Portfolio__c.Designation__c'
// import compname from '@salesforce/schema/Portfolio__c.Company_Name__c'
// import comploc from '@salesforce/schema/Portfolio__c.Company_Location__c'

export default class Portfolio extends LightningElement {


    pic = pictures;
        @api linkedurl="https://www.linkedin.com/in/nazirahmed-patel-1ab363200/"
        @api trailurl="https://www.salesforce.com/trailblazer/nazirpatel"
        @api linkedinpic = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
        @api trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;

              @api recordId='a145g000000NnHAAA0'
              @wire(getRecord,{recordId:'$recordId' ,
              fields:[
            PORTFOLIO_OBJECT.FullName__c,
            PORTFOLIO_OBJECT.Designation__c,
            PORTFOLIO_OBJECT.Company_Name__c,
            PORTFOLIO_OBJECT.Company_Location__c
        ] })
       
              Portfoliodata({ error, data }) {
              if (data) {
                console.log("Record Data",JSON.stringify(data));
              } if (error) {
                  console.error("Error:", error);
              }
            }
      }
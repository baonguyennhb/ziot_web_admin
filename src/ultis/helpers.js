import moment from 'moment';
import * as CONSTANTS from './constants'

const helpers = {
    getEndPointAPI: function () {
        return process.env.REACT_APP_API_ENDPOINT
    },

    isEmpty: function (value) {
        return value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
    },

    formatCash: function (value, currency = 'VNĐ') {
        value = value.toString();
        return value.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        }) + ' ' + currency
    },

    getNow: function (format = 'HH:mm:ss') {
        return moment().format(format);
    },

    redirectForce: function (url, isBlank = false) {
        isBlank ? window.open(url, '_blank') : window.open(url)
    },

    /**
     * Get current scope data label
     **/
    getCurrentScopeDataLabel(layoutReducer) {
        let {searchData} = layoutReducer
        let listScope    = [searchData.siteNameSelected];
        if (!helpers.isEmpty(searchData.plantNameSelected)) {
            listScope.push(searchData.plantNameSelected)
        }

        return listScope.length > 0 ? listScope.join(', ') : '';
    },

    /**
     * Get current scope siteId
     **/
    getCurrentScopeSiteId: function (layoutReducer) {
        let {searchData} = layoutReducer
        return searchData.siteIdSelected
    },

    /**
     * Get current scope plantId
     **/
    getCurrentScopePlantId: function (layoutReducer) {
        let {searchData} = layoutReducer
        return searchData.plantIdSelected
    },

    /**
     * Get random color
     **/
    getRandomColor: function () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },

    /**
     * Calc percentage
     * @param partialValue
     * @param totalValue
     * @param fixNumber
     * @returns {number}
     */
    percentage: function (partialValue, totalValue, fixNumber = 0) {
        let result = (100 * partialValue) / totalValue;
        if (fixNumber > 0) {
            result = result.toFixed(fixNumber);
        }
        return result;
    },

    /**
     * Get time range by filter time
     **/
    getTimeRangeByFilterTime: function (config) {
        let from    = moment()
        let to      = moment();
        let groupBy = "hours"

        switch (config) {
            case CONSTANTS.FILTER_LAST_24_HOUR:
                from    = moment().subtract(24, "hour");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_HOUR
                break
            case CONSTANTS.FILTER_TODAY:
                from    = moment().startOf('day');
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_HOUR
                break
            case CONSTANTS.FILTER_YESTERDAY:
                from    = moment().subtract(1, "day");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_HOUR
                break
            case CONSTANTS.FILTER_LAST_7_DAYS:
                from    = moment().subtract(7, "day");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_DATE
                break
            case CONSTANTS.FILTER_THIS_WEEK:
                from    = moment().startOf('week');
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_DATE
                break
            case CONSTANTS.FILTER_LAST_30_DAYS:
                from    = moment().subtract(30, "day");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_DATE
                break
            case CONSTANTS.FILTER_THIS_MONTH:
                from    = moment().startOf('month');
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_DATE
                break
            case CONSTANTS.FILTER_LAST_6_MONTHS:
                from    = moment().subtract(6, "month");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_MONTH
                break
            case CONSTANTS.FILTER_LAST_12_MONTHS:
                from    = moment().subtract(12, "month");
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_MONTH
                break
            case CONSTANTS.FILTER_THIS_YEAR:
                from    = moment().startOf('year');
                to      = moment();
                groupBy = CONSTANTS.GROUP_BY_MONTH
                break
        }
        return {
            "groupBy"   : groupBy,
            "from"      : from,
            "to"        : to,
            "fromString": from.format(CONSTANTS.DEFAULT_FORMAT_DATETIME),
            "toString"  : to.format(CONSTANTS.DEFAULT_FORMAT_DATETIME),
        }
    },

    getSiteIdByPlantId: function (plantId, sites) {
        let siteId = null;
        if (sites.length > 0) {
            sites.forEach(site => {
                let plantFind = site.plants.find(plant => plant.id === plantId)
                if (!this.isEmpty(plantFind)) {
                    siteId = site.id
                    return siteId;
                }
            })
        }

        return siteId
    },

    cToF: function (celsius) {
        let cTemp   = celsius;
        let cToFahr = cTemp * 9 / 5 + 32;
        let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
        return cToFahr;
    },

    fToC: function (fahrenheit) {
        let fTemp   = fahrenheit;
        let fToCel  = (fTemp - 32) * 5 / 9;
        let message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
        return fToCel;
    },
}
export default helpers;

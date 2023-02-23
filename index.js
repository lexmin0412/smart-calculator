/**
 * 房贷计算
 * @param {*} sum 贷款本金总额
 * @param {*} totalMonth 贷款总期数
 * @param {*} rate 贷款利率
 */
function calculateDebt(sum, totalMonth, rate) {
	console.log('calculateDebt', sum, totalMonth, rate)
	const monthArr = new Array(totalMonth).fill('')
	const monthPrincipal = sum / totalMonth
	let leftPrincipal = sum
	const debtPerMonth = monthArr.map(()=>{
		const interest = leftPrincipal * rate / 12
		leftPrincipal = leftPrincipal - monthPrincipal
		return {
			principal: monthPrincipal,
			interest,
			totalPerMonth: monthPrincipal + interest,
		}
	})
	const totalSum = debtPerMonth.reduce((item, currentValue)=>{
		const { totalPerMonth } = currentValue
		return item + totalPerMonth
	}, 0)
	const totalInterest = debtPerMonth.reduce((item, currentValue) => {
		const { interest } = currentValue
		return item + interest
	}, 0)
	return {
		debtPerMonth,
		totalSum,
		totalInterest
	}
}

const result = calculateDebt(850000, 360, 0.0529)
console.log('result', result)

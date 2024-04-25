import ensureUnit from './ensureUnit'
import Native from '../native-types'

import type { HKQuantityTypeIdentifier, HKStatisticsOptions, UnitForIdentifier } from '../native-types'

async function queryStatisticsCollectionForQuantity<TIdentifier extends HKQuantityTypeIdentifier, TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>>(
  identifier: TIdentifier,
  options: readonly HKStatisticsOptions[],
  from: Date,
  anchorDate: Date,
  intervalComponents: any,
  to?: Date,
  unit?: TUnit,
) {
  const actualUnit = await ensureUnit(identifier, unit)
  const toDate = to || new Date()
  const rawResponse = await Native.queryStatisticsCollectionForQuantity(
    identifier,
    actualUnit,
    from.toISOString(),
    toDate.toISOString(),
    options,
    anchorDate.toISOString(),
    intervalComponents
  )

  return rawResponse
}

export default queryStatisticsCollectionForQuantity

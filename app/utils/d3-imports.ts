// Optimized D3 imports - only import what we use
export { select, selectAll } from 'd3-selection';
export { transition } from 'd3-transition';
import 'd3-transition'; // Side effect import to add transition methods to selections
export { line, curveNatural } from 'd3-shape';
export { scaleLinear, scaleOrdinal, scaleBand, scaleTime } from 'd3-scale';
export { axisBottom, axisLeft } from 'd3-axis';
export { format } from 'd3-format';
export { csv } from 'd3-fetch';
export { treemap, hierarchy, treemapSquarify } from 'd3-hierarchy';
export { drag } from 'd3-drag';
export { timeFormat } from 'd3-time-format';
export { range, extent, max, min } from 'd3-array';
export { easeCubicInOut } from 'd3-ease';

// Re-export types
export type { Selection } from 'd3-selection';
export type { DSVRowArray } from 'd3-dsv';
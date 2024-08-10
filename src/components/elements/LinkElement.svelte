<script lang="ts">
	import type { Link } from '../../utils/Elements';

	export let element: Link;

	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
	$: fontWeight = `font-weight : ${element.fontWeight}`;
	$: fontSize = `font-size : ${element.fontSize}px`;
	$: textAlign = `text-Align : ${element.textAlign}`;
	$: color = `color : ${element.color}`;
	$: underline = `text-decoration: ${element.underline ? 'underline' : 'none'}`;
</script>

<div style={`${color}; ${fontSize}; ${textAlign}; ${fontWeight}; ${padding}`}>
	<a href={`https://${element.url} `} target="_blank" style={`${underline};`}>{element.content}</a>
</div>

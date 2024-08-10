<script lang="ts">
	import type { Paragraph } from '../../utils/Elements';

	export let element: Paragraph;

	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
	$: fontWeight = `font-weight : ${element.fontWeight}`;
	$: fontSize = `font-size : ${element.fontSize}px`;
	$: textAlign = `text-Align : ${element.textAlign}`;
	$: color = `color : ${element.color}`;
</script>

<div style={`${color}; ${fontSize}; ${textAlign}; ${fontWeight}; ${padding}`}>
	<p>{element.content}</p>
</div>
